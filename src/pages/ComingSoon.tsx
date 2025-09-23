import React from 'react'
import { FaHome, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  return (
    <div className="flex flex-col notfound-container items-center gap-2 py-10 mt-5">
        <FaRegClock className="text-amber-500 text-8xl"/>
        <h1 className="text-4xl font-bold">404 - Coming Soon</h1>
        <p className="text-gray-600">
            This page is under construction. Please check back later.
        </p>
        <Link to="/" className="no-underline">
            <button className="flex items-center gap-1 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-800 h-12">
            <FaHome/>Go Back Home
        </button>
        </Link>
    </div>
  )
}

export default ComingSoon