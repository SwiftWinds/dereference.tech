import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Profile from "../components/Profile";
import Link from 'next/link';
const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  }
  // More messages...
]


export default function Home() {
  return (<>
  <div className={styles.container}>
      <h1 className={styles.title}>
        Recent Questions
      </h1>
      
    <div>
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{<ul role="list" className="divide-y divide-gray-200">
      {messages.map((message) => (
        <li
          key={message.id}
          className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <a href="#" className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                <p className="text-sm text-gray-500 truncate">{message.subject}</p>
              </a>
            </div>
            <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
              {message.time}
            </time>
          </div>
          <div className="mt-1">
            <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
          </div>
        </li>
      ))}
    </ul>}</div>
    </div>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </a>
    </footer>
  </div>
  </>);
}
