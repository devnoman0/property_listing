"use client";

import React from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="mb-4">
        <Input
          type="email"
          placeholder="@shohanux.com"
          name="email"
          label={"Email"}
        />
      </div>

      <div>
        <Input label={"Password"} type="password" placeholder="password" />
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
    </div>
  );
};

export default Login;
