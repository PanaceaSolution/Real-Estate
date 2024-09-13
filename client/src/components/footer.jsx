import React from 'react'

const footer = () => {
  return (
    <footer className=' bg-slate-300 p-4 text-center shadow-inner mt-4'>
    <p className='text-gray-700 text-sm'>
      &copy; {new Date().getFullYear()} Hamro_Ghar_Jaga. All rights reserved.
    </p>
  </footer>
  )
}

export default footer
