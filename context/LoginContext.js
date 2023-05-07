"use client";

import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <LoginContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
