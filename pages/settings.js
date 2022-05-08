import BountyThreshold from "../components/BountyThreshold";

const user = {
  name: "Floyd Miles",
  email: "floy.dmiles@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Applicants", href: "#" },
  { name: "Company", href: "#" },
];
const breadcrumbs = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const team = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Bessie Richards",
    email: "bessie.richards@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Black",
    email: "floyd.black@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const prefs = [
  {
    name: "Public access",
    description: "This project would be available to anyone who has the link",
  },
  {
    name: "Private to Project Members",
    description: "Only members of this project would be able to access",
  },
  {
    name: "Private to you",
    description: "You are the only one able to access this project",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function settings() {

  return <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
    <form>
      <div className="space-y-6">
        <div>
          <h1 className="text-lg leading-6 font-medium text-gray-900">User
            Settings</h1>
        </div>

        <BountyThreshold />

        <div>
          <label htmlFor="tags"
                 className="block text-sm font-medium text-gray-700">
            Skills
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
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
