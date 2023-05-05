"use client";

import React from "react";

const Details = ({ Icon, title, type, quantity }) => {
  console.log(Icon);
  return (
    <div className="flex items-center bg-gray-100 py-1 rounded-lg px-3 gap-2">
      {
        <span
          className={`text-sm
          ${type === "primary" && "text-orange-400"}
          ${type === "secondary" && "text-blue-400"} ${
            type === "warning" && "text-emerald-500"
          }`}
        >
          {Icon}
        </span>
      }
      <span className="text-gray-600 text-sm font-bold">
        {quantity} <span className="sm:hidden">{title}</span>
      </span>
    </div>
  );
};

export default Details;
