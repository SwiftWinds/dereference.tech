import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { questionsCollection, usersCollection } from "../../firebaseConfig";
import PostDivider from "../../components/PostDivider";
import AddAnswer from "../../components/AddAnswer";
import { useUser } from "@auth0/nextjs-auth0";
import Deso from "deso-protocol";

export default function QuestionPage() {
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [yourAnswer, setYourAnswer] = useState(null);

  async function fetchQuestion() {
    if (!id) {
      return;
    }
    const questionRef = doc(questionsCollection, id);
    const question = await getDoc(questionRef);
    setQuestion(question.data());
  }

  async function fetchAnswers() {
    if (!id) {
      return;
    }
    if (!user) {
      return;
    }
    const answersRef = collection(doc(questionsCollection, id), "answers");
    const answers = await getDocs(answersRef);
    const userRef = doc(usersCollection, user.sub);
    const userDoc = await getDoc(userRef);
    const { seenAnswers } = userDoc.data();
    console.log("seenAnswers", seenAnswers);
    setAnswers(answers.docs.map(answer => ({
      id: answer.id,
      ...answer.data(),
      seen: seenAnswers.includes(answer.id),
    })).sort((a, b) => b.score - a.score));
  }

  async function handleAddAnswer(e) {
    e.preventDefault();
    if (!yourAnswer) {
      return;
    }
    if (!id) {
      return;
    }
    const deso = new Deso();
    let publicKey = deso.identity.getUserKey();
    const userRef = doc(usersCollection, user.sub);
    if (publicKey) {
      await setDoc(userRef, { publicKey }, { merge: true });
    } else {
      const user = await getDoc(userRef);
      publicKey = user.data().publicKey;
      if (!publicKey) {
        await deso.identity.login();
        publicKey = deso.identity.getUserKey();
        await setDoc(userRef, { publicKey }, { merge: true });
      }
    }
    const answersRef = collection(doc(questionsCollection, id), "answers");
    const answerRef = await addDoc(answersRef, {
      body: yourAnswer,
      score: 0,
      user: user?.nickname || user?.sub,
      publicKey,
    });
    await updateDoc(userRef, { seenAnswers: arrayUnion(answerRef.id) });
    await fetchAnswers();
  }

  async function handleRevealAnswer(e) {
    const answerId = e.target.getAttribute("answerId");
    e.preventDefault();
    console.log(answers);
    console.log("answerId", answerId);
    const answer = answers.find(answer => answer.id === answerId);
    console.log("answer", answer);
    const deso = new Deso();
    let publicKey = deso.identity.getUserKey();
    const userRef = doc(usersCollection, user.sub);
    if (publicKey) {
      await setDoc(userRef, { publicKey }, { merge: true });
    } else {
      const user = await getDoc(userRef);
      publicKey = user.data().publicKey;
      if (!publicKey) {
        await deso.identity.login();
        publicKey = deso.identity.getUserKey();
        await setDoc(userRef, { publicKey }, { merge: true });
      }
    }
    const request = {
      "SenderPublicKeyBase58Check": publicKey,
      "RecipientPublicKeyOrUsername": answer.publicKey,
      "AmountNanos": 1,
      "MinFeeRateNanosPerKB": 1000,
    };
    console.log(request);
    await deso.wallet.sendDesoRequest(request);
    await updateDoc(userRef, { seenAnswers: arrayUnion(answerId) });
    await fetchAnswers();
  }

  useEffect(function() {
    fetchQuestion();
    fetchAnswers();
  }, [id, user]);

  return <>
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Question:
            <span className="ml-3 font-normal">
              {question?.title}
            </span>
          </span>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <p className="mt-6 text-xl text-gray-500 leading-8">
            {question?.body}
          </p>
        </div>
      </main>
    </div>
    <PostDivider />
    <ul role="list"
        className="divide-y divide-gray-200 space-y-3">
      {answers.map((answer) => (
        <li
          key={answer.id}
          className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <p
                className="text-lg font-medium text-gray-900 truncate">{answer.user}</p>
              <p
                className="text-sm text-gray-500 truncate">{answer.score} upvotes</p>
            </div>
          </div>
          <div className="mt-1">
            {answer.seen ?
              <p
                className="line-clamp-2 text-sm text-gray-600">{answer.body}</p> :
              <>
                <div className="grid place-items-center w-100 h-12 mx-auto">
                  <div
                    className="w-100 mx-auto">
                    <button
                      answerId={answer.id}
                      onClick={handleRevealAnswer}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Reveal answer
                    </button>
                  </div>
                </div>
              </>}
          </div>
        </li>
      ))}
    </ul>
    <div className="my-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div
          className="flex flex-col space-y-2 font-extrabold text-3xl mb-5">
          Your answer
        </div>
        <AddAnswer value={yourAnswer}
                   onChange={e => setYourAnswer(e.target.value)}
                   onClick={handleAddAnswer} />
      </div>
    </div>
  </>;
  ;
}
