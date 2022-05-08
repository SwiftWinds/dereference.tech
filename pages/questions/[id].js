import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { questionsCollection } from "../../firebaseConfig";

export default function QuestionPage() {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState(null);

  async function fetchQuestion() {
    if (!id) {
      return;
    }
    const questionRef = doc(questionsCollection, id);
    const question = await getDoc(questionRef);
    setQuestion(question.data());
  }

  useEffect(function() {
    fetchQuestion();
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
  </>;
  ;
}
