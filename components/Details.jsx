"use client";

import React from "react";

const Details = ({ Icon, title, type }) => {
  console.log(Icon);
  return (
    <div className="flex items-center bg-gray-200 py-1 rounded-lg px-3 gap-2">
      {
        <span
          className={`text-xl text-orange-400 ${
            type === "secondary" && "text-blue-400"
          } ${type === "warning" && "text-emerald-500"}`}
        >
          {Icon}
        </span>
      }
      <span className="text-gray-700">{title}</span>
    </div>
  );
};

export default Details;
