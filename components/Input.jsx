import React from 'react'

const Input = ({type, placeholder, name, onChange}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} onChange={onChange} className="relative w-full  bg-white py-3 px-6 text-left border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm"/>
  )
}

export default Input