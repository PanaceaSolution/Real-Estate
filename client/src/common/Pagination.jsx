import React from 'react'

const Pagination = () => {
  return (
    <div className="mt-4 w-full border-gray-300">
    <div className="mt-2 flex items-center justify-end">
      <div className="space-x-2">
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  </div>
  )
}

export default Pagination
