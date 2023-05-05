import React from "react";
import FeatureCard from "./FeatureCard";

const stepsInfo = [
  {
    id: 1,
    step: "Property Acquisition",
    variant: "blue",
    desc: "We find and purchase off-market, wholesale properties that are deeply discounted relative to retail value. It all starts with a great buy!",
  },
  {
    id: 2,
    variant: "yellow",
    step: "Customized Deal Selection",
    desc: "We determine the best exit strategy for each deal, then send these amazing, off-market deals right to your inbox. You simply pick the properties that fit your buy box and investment needs!",
  },
  {
    id: 3,
    variant: "red",
    step: "Hassle-Free Closings",
    desc: "We do all the leg work to coordinate closings quickly. We can even recommend contractors and hard money/private lenders. We have the easiest closings in the industry!",
  },
  {
    id: 4,
    variant: "yellow",
    step: "Wealth-Building Deals",
    desc: "You get an amazing, equitable, secure deal that helps you build wealth and reach your investing goals!",
  },
];

const Feature = () => {
  return (
    <div>
      <p className="uppercase text-lg font-medium text-center text-blue-600 mb-2">
        Here&apos;s How It Works
      </p>
      <h1 className="text-3xl mb-12 text-gray-800 max-w-5xl mx-auto md:text-4xl lg:text-5xl font-bold text-center">
        Boosting Deals and Wealth
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {stepsInfo.map((stepInfo) => (
          <FeatureCard
            key={stepInfo.id}
            id={stepInfo.id}
            step={stepInfo.step}
            desc={stepInfo.desc}
            variant={stepInfo.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
