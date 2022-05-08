import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BountyThreshold from "../components/BountyThreshold";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { questionsCollection, usersCollection } from "../firebaseConfig";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { database } from "../firebaseConfig"


export default function Home() {
  async function getQuestions() {
    const qRef = questionsCollection;
    const snapshot = await getDocs(qRef);
    setQuestions(snapshot.docs.map(doc => ({id: 1, title: doc.data().title, asker: doc.data().user, preview: doc.data().body})))
    console.log(questions)
  }

  useEffect(function() {
    getQuestions();
  }, []);

  const [questions, setQuestions] = useState([]);
  

  return (<>
  <div className={styles.container}>
      <h1 className={styles.title}>
        Recent Questions
      </h1>

    <div>
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{<ul role="list" className="divide-y divide-gray-200">
      {questions.map((question) => (
        <li
          key={question.id}
          className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href="#" className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 truncate">{question.asker}</p>
                <p className="text-sm text-gray-500 truncate">{question.title}</p>
              </a>
            </div>
          </div>
          <div className="mt-1">
            <p className="line-clamp-2 text-sm text-gray-600">{question.preview}</p>
          </div>
        </li>
      ))}
    </ul>}</div>
    </div>
  </div>
  </>);
}
