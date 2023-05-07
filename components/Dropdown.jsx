"use client";

import React from "react";

export default function Dropdown({ name, options, register }) {
  return (
    <div className="w-full text-gray-700 bg-gray-200 rounded-xl px-4 py-3">
      <select
        className="w-full h-full bg-transparent border-none cursor-pointer focus:outline-none"
        {...register(name)}
        name={name}
      >
        {options.map((item, idx) => (
          <option className="" key={idx} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
