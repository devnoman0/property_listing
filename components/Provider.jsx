"use client";

import LoginContextProvider from "@/context/LoginContext";
import SignupContextProvider from "@/context/SignupContext";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }) => {
  return (
    <SessionProvider>
      <LoginContextProvider>
        <SignupContextProvider>{children}</SignupContextProvider>
      </LoginContextProvider>
    </SessionProvider>
  );
};

export default Provider;
