"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsHouseCheckFill, BsTelephoneFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import Container from "./Container";
import MyModal from "./Modal";
import { usePathname } from "next/navigation";
import Login from "./auth/Login";
import { signIn, useSession } from "next-auth/react";

export const MenuItems = [
  {
    name: "Marketplace",
    link: "/listings",
    isActive: true,
    end: false,
  },
  {
    name: "Work With Us",
    link: "/about",
    isActive: false,
    end: false,
  },
  {
    name: "FAQs",
    link: "/contact",
    isActive: false,
    end: true,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    setIsOpen(true);
  };

  const { data: session } = useSession();

  console.log(session);

  return (
    <div className=" text-gray-800 backdrop-blur-sm border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between py-4 ">
          <Link href="/" className="text-3xl flex items-end gap-2">
            <BsHouseCheckFill />
            <span className="text-2xl leading-none">WeBuyHouse</span>
          </Link>

          <div className="hidden space-x-10 text-gray-600 md:block">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`transition hover:text-gray-800 ${
                  item.isActive && "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={handleClick}
              className="border border-gray-700 text-gray-700 rounded-full py-2 px-4 font-light"
            >
              Login / Register
            </button>
          </div>

          <button className="bg-gray-700 text-white p-2 text-xl rounded md:hidden">
            <BiMenu />
          </button>
        </div>
        <MyModal isOpen={isOpen} closeModal={closeModal} title="Welcome back!">
          <Login />
        </MyModal>
      </Container>
    </div>
  );
};

export default Navbar;
