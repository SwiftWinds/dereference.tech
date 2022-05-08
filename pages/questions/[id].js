import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { questionsCollection } from "../../firebaseConfig";
import PostDivider from "../../components/PostDivider";

export default function QuestionPage() {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

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
    const answersRef = collection(doc(questionsCollection, id), "answers");
    const answers = await getDocs(answersRef);
    setAnswers(answers.docs.map(answer => answer.data()));
  }

  useEffect(function() {
    fetchQuestion();
    fetchAnswers();
  }, [id]);

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
        className="divide-y divide-gray-200">
      {answers.map((answer) => (
        <li
          key={answer.id}
          className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <span className="absolute inset-0" aria-hidden="true" />
              <p
                className="text-sm font-medium text-gray-900 truncate">{answer.user}</p>
              <p
                className="text-sm text-gray-500 truncate">{answer.score}</p>
            </div>
          </div>
          <div className="mt-1">
            <p
              className="line-clamp-2 text-sm text-gray-600">{answer.body}</p>
          </div>
        </li>
      ))}
    </ul>
  </>;
  ;
}
