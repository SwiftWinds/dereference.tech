import BountyThreshold from "../components/BountyThreshold";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { usersCollection } from "../firebaseConfig";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";

export default function settings() {
  const [bountyThreshold, setBountyThreshold] = useState(0);
  const [skills, setSkills] = useState([]);
  const [userRef, setUserRef] = useState(null);
  const { user } = useUser();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    await setDoc(userRef, { bountyThreshold, skills }, { merge: true });
    await router.push("/");
  }

  async function getSettings() {
    if (!user) {
      return;
    }

    const userRef = doc(usersCollection, user.sub);
    setUserRef(userRef);
    const userData = await getDoc(userRef);
    const { bountyThreshold, skills } = userData.data();
    setBountyThreshold(bountyThreshold);
    setSkills(skills);
  }

  useEffect(() => {
    getSettings();
  }, [user]);

  return <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
    <form>
      <div className="space-y-6">
        <div>
          <h1 className="text-lg leading-6 font-medium text-gray-900">User
            Settings</h1>
        </div>

        <BountyThreshold value={bountyThreshold}
                         onChange={e => setBountyThreshold(Number(e.target.value))} />

        <div>
          <label htmlFor="tags"
                 className="block text-sm font-medium text-gray-700">
            Skills
          </label>
          <input
            value={skills.join(", ")}
            onChange={e => setSkills(e.target.value.split(",").map(s => s.trim()))}
            type="text"
            name="tags"
            id="tags"
            className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-end">
          <Link href="/">
            <a
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </a>
          </Link>
          <button
            onClick={handleSubmit}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  </main>;
}
