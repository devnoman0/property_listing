"use client";

import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { TbBathFilled } from "react-icons/tb";
import { RiRulerFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { useRouter } from "next/navigation";

import Details from "./Details";

const ListingCard = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/listings/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-transparent rounded-xl shadow-custom md:w-full overflow-hidden relative cursor-pointer transition hover:shadow-none hover:border hover:border-dashed hover:border-gray-200"
    >
      <Image
        className="h-40 w-full object-cover"
        src={data?.image}
        alt="House"
        width={500}
        height={300}
      />

      <div
        className="
      w-full h-40 bg-gray-400/10 absolute top-0 left-0 rounded-b-3xl
      "
      ></div>

      <div className="flex items-center justify-between w-full px-4 absolute top-4 left-0">
        <span className="bg-white text-gray-700 rounded text-xs font-medium py-1 px-2">
          FOR SALE
        </span>
        <div className="flex items-center justify-center rounded-lg  cursor-pointer bg-white h-8 w-8 text-xl">
          <BiHeart className="text-indigo-400" />
        </div>
      </div>

      <div className="py-4 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-700 text-xl font-semibold mb-2">
            ${data?.price}
          </h3>
        </div>
        {/* <h3 className="text-gray-700 text-lg mb-1 font-medium">
          {data?.address}
        </h3> */}
        <div className="flex items-center gap-1 mb-4">
          <HiOutlineLocationMarker className="text-lg text-gray-500" />
          <p className=" text-gray-400 text-sm font-poppins">
            {data?.location}
          </p>
        </div>

        <div className="border border-dashed w-full my-4"></div>

        <div className="flex items-center justify-between mb-2">
          <Details
            Icon={<IoIosBed />}
            quantity="3"
            title="Beds"
            type="primary"
          />
          <Details
            Icon={<TbBathFilled />}
            quantity="2"
            title="Baths"
            type="secondary"
          />
          <Details Icon={<RiRulerFill />} quantity="60m" type="warning" />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
