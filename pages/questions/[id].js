import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc } from "firebase/firestore";
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
    const question = await questionRef.get();
    setQuestion(question.data());
  }

  useEffect(function() {
    fetchQuestion();
  }, [id]);

  return <>
    <div>QuestionPage</div>
    <h2>{question?.title}</h2>
    <p>{question?.body}</p>
  </>;
}
