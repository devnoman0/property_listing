"use client";

import React, { useContext, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import MyModal from "../Modal";
import { SignupContext } from "@/context/SignupContext";
import { LoginContext } from "@/context/LoginContext";
import toast from "react-hot-toast";

import axios from "axios";

const Signup = () => {
  const { isOpen, closeModal } = useContext(SignupContext);
  const { openModal } = useContext(LoginContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (error) {
    toast.error(error);
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const {
      userName,
      email,
      firstName,
      lastName,
      mobile,
      password,
      confirmPassword,
      remember,
    } = data;
    if (password !== confirmPassword) {
      setError("Password does not match");
      setLoading(false);
      return;
    }

    if (!remember) {
      setError("Accept terms and conditions");
      setLoading(false);
      return;
    }

    axios
      .post(
        "/api/auth/register",
        {
          userName,
          email,
          firstName,
          lastName,
          mobile,
          password,
          isAdmin: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.message);
        setLoading(false);
      });
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
            name="userName"
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
            name="mobile"
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
            <input
              type="checkbox"
              {...register("remember")}
              id="remember"
              value="checked"
            />
            <label htmlFor="remember" className="ml-2 cursor-pointer">
              I accept the{" "}
              <span className="text-blue-500 cursor-pointer">
                Terms &amp; Conditions
              </span>{" "}
            </label>
          </div>
        </div>

        <div className="mt-6">
          <Button loading={loading} type={"submit"}>
            Sign up
          </Button>
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
