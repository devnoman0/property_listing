"use client";

import React, { useContext } from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import MyModal from "../Modal";
import { SignupContext } from "@/context/SignupContext";
import { LoginContext } from "@/context/LoginContext";

const Signup = () => {
  const { isOpen, closeModal } = useContext(SignupContext);
  const { openModal } = useContext(LoginContext);

  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleLogin = () => {
    closeModal();
    openModal();
  };

  return (
    <MyModal isOpen={isOpen} closeModal={closeModal} title="Create an account">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            register={register}
            type="text"
            placeholder="shohanux"
            name="username"
            label={"Username"}
          />
        </div>

        <div className="mb-4">
          <Input
            register={register}
            type="email"
            placeholder="@shohanux.com"
            name="email"
            label={"Email"}
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Input
            register={register}
            type="text"
            placeholder="Shohanur"
            name="firstName"
            label={"First Name"}
          />

          <Input
            register={register}
            type="text"
            placeholder="Rahman"
            name="lastName"
            label={"Last Name"}
          />
        </div>

        <div className="mb-4">
          <Input
            register={register}
            name="number"
            label={"Mobile"}
            type="text"
            placeholder="+8801999-828842"
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Input
            register={register}
            type="password"
            placeholder="password"
            name="password"
            label={"Password"}
          />

          <Input
            register={register}
            type="password"
            placeholder="password"
            name="confirmPassword"
            label={"Confirm Password"}
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
              I accept the{" "}
              <span className="text-blue-500 cursor-pointer">
                Terms &amp; Conditions
              </span>{" "}
            </label>
          </div>
        </div>

        <div className="mt-6">
          <Button>Sign up</Button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              onClick={handleLogin}
              className="text-blue-500 cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </MyModal>
  );
};

export default Signup;
