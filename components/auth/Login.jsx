"use client";

import React from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
