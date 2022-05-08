export default function MobileNav() {
  return <nav className="lg:hidden" aria-label="Global">
    <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
      <a href="#" aria-current="page"
         className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Dashboard</a>

      <a href="#"
         className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Calendar</a>

      <a href="#"
         className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Teams</a>

      <a href="#"
         className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Directory</a>
    </div>
    <div className="border-t border-gray-200 pt-4 pb-3">
      <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full"
               src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               alt="" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-800">Chelsea Hagon
          </div>
          <div
            className="text-sm font-medium text-gray-500">chelsea.hagon@example.com
          </div>
        </div>
        <button type="button"
                className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24" strokeWidth="2"
               stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
      <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
        <a href="#"
           className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your
          Profile</a>

        <a href="#"
           className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>

        <a href="#"
           className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign
          out</a>
      </div>
    </div>
  </nav>;
}
