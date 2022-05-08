import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const loggedInNav = [
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/api/auth/logout" },
];

const loggedOutNav = [
  { name: "Sign in", href: "/api/auth/login" },
];

export default function DropdownMenu() {
  const { user } = useUser();
  const userNavigation = user ? loggedInNav : loggedOutNav;
  return <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items
      className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
      {userNavigation.map((item) => (
        <Menu.Item key={item.name}>
          {({ active }) => (
            <Link href={item.href}>
              <a
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block py-2 px-4 text-sm text-gray-700",
                )}
              >
                {item.name}
              </a>
            </Link>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Transition>;
}
