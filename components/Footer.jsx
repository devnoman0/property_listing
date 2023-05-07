"use client";

import Container from "./Container";
import { BsHouseCheckFill } from "react-icons/bs";
import Link from "next/link";
import { MenuItems } from "./Navbar";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container>
        {/* <div className="border-t flex items-center justify-between py-8">
          <Link
            href="/"
            className="text-3xl flex items-end gap-2 text-gray-700"
          >
            <BsHouseCheckFill />
            <span className="text-2xl leading-none">WeBuyHouse</span>
          </Link>

          <div className="flex items-center">
            {MenuItems.map((item, index) => (
              <>
                <Link
                  key={index}
                  href={item.link}
                  className={`transition hover:text-gray-800 ${
                    item.isActive && "text-gray-800"
                  }
                `}
                >
                  {item.name}
                </Link>

                {!item.end && <span className="mx-4 text-gray-500">|</span>}
              </>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-xl text-gray-700">
            <Link href="/">
              <FaLinkedin />
            </Link>
            <Link href="/">
              <FaFacebookMessenger />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
          </div>
        </div> */}

        <div className="border-t py-5 mt-10">
          <h1 className="text-center font-light text-sm">
            &#169; 2023 WeBuyHouse Deals, All Rights Reserved.
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
