import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { addDoc } from "firebase/firestore";
import { questionsCollection } from "../firebaseConfig";
import { useRouter } from "next/router";
import BountyInput from "../components/BountyInput";

export default function NewQuestion() {
  const { user } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [bounty, setBounty] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      return;
    }
    await addDoc(questionsCollection, {
      title,
      bounty,
      body,
      user: user?.nickname || user?.sub,
    });
    await router.push("/");
  }

  return (
    <>
      <div
        className="pl-40 pt-10 text-3xl font-medium bg-white overflow-hidden shadow rounded-lg pt-6">
        <h1 className="pl-6 pd-10 font-extrabold">New Question</h1>
        <div className="px-4 sm:px-6">
          {<div>
            <div>
              <label htmlFor="title"
                     className="block text-2xl mt-3 font-bold text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  id="title"
                  className="w-60 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                  placeholder="How do I ..."
                />
              </div>
            </div>
          </div>}
          <BountyInput value={bounty}
                       onChange={(e) => setBounty(Number(e.target.value))} />
        </div>
        <div className="px-4 py-5 sm:p-6">{<div>
          <label htmlFor="question"
                 className="block text-2xl font-medium text-gray-700">
            Body
          </label>
          <div className="mt-1">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          name="question"
          id="question"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-2/5 sm:text-sm border-gray-300 rounded-md"
          defaultValue={""}
        />
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Question
            </button>
          </div>
        </div>}</div>
      </div>
    </>
  );
}
