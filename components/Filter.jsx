"use client"

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";

const bedrooms = [
  { name: "All Bedrooms" },
  { name: "1+" },
  { name: "2+" },
  { name: "3+" },
  { name: "4+" },
  { name: "5+" },
];

const bath = [
  { name: "All Baths" },
  { name: "1+" },
  { name: "2+" },
  { name: "3+" },
  { name: "4+" },
  { name: "5+" },
];

const Filter = () => {
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
    console.log(value);
  

  return (
    <div className="py-4">
      <Container>
        <div className="grid md:grid-cols-6 gap-4">
        <div className="flex items-center gap-2 w-full md:col-span-2  bg-gray-200 py-3 px-6 text-left rounded-xl focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm">
          <BiSearch className="text-gray-700 text-xl"/>
          <input 
          name='address'
          value={value.address}
          onChange={handleChange}
          type="text"
          className="w-full bg-transparent placeholder:text-gray-700 outline-none" placeholder="Street, City, State, Zip or keyword"/>
          </div>


          <Dropdown data={bedrooms} />
          <Dropdown data={bath} />
        <Input name="price" onChange={handleChange} type="text" placeholder="Price To ($)" />
        <Button>SEARCH</Button>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
