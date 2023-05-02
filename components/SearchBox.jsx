"use client"

import React, { useState } from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";

const SearchBox = () => {
  const [value, setValue] = useState({
    address: '',
    bedrooms: '',
    baths: '',
    price: ''
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }



  return (
    <div className="flex items-center justify-between w-full max-w-[600px] p-[6px] gap-4 rounded-full border border-gray-200">
            <div className="flex items-center gap-3 ml-5 flex-1">
              <HiOutlineLocationMarker className='text-gray-700' size={25} />
              <input
              name='address'
              value={value.address}
              onChange={handleChange}
                type="text"
                className="text-gray-700 w-full outline-none"
                placeholder="Enter your address here.."
              />
            </div>

            <button className="rounded-full py-3 px-6 transition bg-gray-700 hover:bg-gray-600 text-white">
              Get my free offer
            </button>
          </div>
  )
}

export default SearchBox