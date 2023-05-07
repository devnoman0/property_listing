"use client";

import React from "react";

const ListingContainer = ({ children }) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-6 mt-4">
      {children}
    </div>
  );
};

export default ListingContainer;
