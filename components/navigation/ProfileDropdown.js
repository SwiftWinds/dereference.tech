import { Menu } from "@headlessui/react";
import DropdownMenu from "./DropdownMenu";
import { useUser } from "@auth0/nextjs-auth0";

export default function ProfileDropdown() {
  const { user } = useUser();
  return <Menu as="div" className="flex-shrink-0 relative ml-5">
    <div>
      <Menu.Button
        className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span className="sr-only">Open user menu</span>
        <img className="h-8 w-8 rounded-full"
             src={user?.picture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
             alt="Profile" />
      </Menu.Button>
    </div>
    <DropdownMenu />
  </Menu>;
}
