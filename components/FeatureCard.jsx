import React from "react";
import { IoCartSharp } from "react-icons/io5";

const FeatureCard = ({ step, id, desc }) => {
  return (
    <div className="border border-dashed border-gray-300 rounded-xl w-full shadow-custom md:max-w-sm overflow-hidden relative px-6 py-10 lg:py-8">
      <div className="flex flex-col justify-center items-center">
        {/* <h1 className="text-3xl font-semibold text-slate-800 text-center">
          Step {id}
        </h1> */}

        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-3 text-center">
            Step {id}
          </h1>
          <p className="text-[#656464] font-base text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
