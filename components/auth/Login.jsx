"use client";

import React, { useContext } from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import MyModal from "../Modal";
import { LoginContext } from "@/context/LoginContext";
import { SignupContext } from "@/context/SignupContext";

const Login = () => {
  const { isOpen, closeModal } = useContext(LoginContext);
  const { openModal } = useContext(SignupContext);
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSignup = () => {
    closeModal();
    openModal();
  };

  return (
    <MyModal isOpen={isOpen} closeModal={closeModal} title="Welcome back!">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            register={register}
            type="email"
            placeholder="@shohanux.com"
            name="email"
            label={"Email"}
          />
        </div>

        <div>
          <Input
            register={register}
            name="password"
            label={"Password"}
            type="password"
            placeholder="password"
          />
        </div>

        <div
          className="
        flex
        items-center
        justify-between
        mt-6
        w-full
        text-sm
        text-gray-600
      "
        >
          <div className="flex items-center">
            <input type="checkbox" id="remember" value="checked" />
            <label htmlFor="remember" className="ml-2 cursor-pointer">
              Remember me
            </label>
          </div>

          <Link href="/" className="text-center  text-blue-500">
            Forgot Password?
          </Link>
        </div>

        <div className="mt-6">
          <Button>Login</Button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <span
              onClick={handleSignup}
              className="text-blue-500 cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </MyModal>
  );
};

export default Login;
