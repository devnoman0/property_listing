"use client";

import { createContext, useState } from "react";

export const SignupContext = createContext();

const SignupContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <SignupContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupContextProvider;
