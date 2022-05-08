/* This example requires Tailwind CSS v2.0+ */
export default function newQuestion() {
    return (
        <>
      <div className="pl-40 pt-10 text-3xl font-medium bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 pt-6">
        <h1 className ="pl-20 pd-10">Ask Your Question Here</h1>
        <div className="px-4 py-5 sm:px-6">
          {<div>
      <label htmlFor="title" className="block text-2xl font-medium text-gray-700">
        Title
      </label>
      <div className="mt-1">
        <input
          type="title"
          name="title"
          id="title"
          className="px-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/3 sm:text-base border-gray-300 rounded-md"
          placeholder="Add the title of your question here"
        />
      </div>
    </div>}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6">{<div>
      <label htmlFor="question" className="block text-2xl font-medium text-gray-700">
        Body
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="question"
          id="question"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-2/5 sm:text-sm border-gray-300 rounded-md"
          defaultValue={''}
        />
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Question
      </button>
      </div>
    </div>}</div>
      </div>
      <div className="pt-4 max-w-7xl mx-auto sm:px-6 lg:px-8">{
        <><h1>Select what areas your question is relevant to:</h1>
          <span className="pt-4 relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              C#
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Java
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              php
            </button>
          </span></>
        }</div>
      </>
    )
  }
