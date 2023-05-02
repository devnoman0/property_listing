import React from 'react'

const Button = ({children}) => {
  return (
    <button className="relative w-full  bg-gray-700 text-white py-3 px-6 border border-transparent focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm">{children}</button>
  )
}

export default Button