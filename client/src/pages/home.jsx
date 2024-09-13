import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cyan-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Our Real Estate Website
        </h1>
        <p className="text-gray-600">
          This is the home page of our Real Estate website. Explore our listings and find your dream property!
        </p>
      </div>
    </div>
  )
}

export default Home
