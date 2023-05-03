"use client"

import Image from "next/image";
import House from "../public/house.jpg";
import { BiHeart } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { TbBathFilled } from "react-icons/tb";
import { RiRulerFill } from "react-icons/ri";
import Details from "./Details";

const houseDetails = {
  price: "$99.000",
  address: "Gulfport, MS 39503",
  location: "1234 Main St, City, 12345, FL",
  beds: "3 Beds",
  bathrooms: "2 Bathrooms",
  size: "5x7 m2",
};

const ListingCard = () => {
  return (
    <div className="shadow-md rounded-3xl md:max-w-sm overflow-hidden relative">
      <Image className="h-40 w-full rounded-b-3xl object-cover" src={House} alt="House" />

      <div className="
      w-full h-40 bg-gray-400/20 absolute top-0 left-0 rounded-b-3xl
      ">

      </div>

      <div className="flex items-center justify-between w-full px-4 absolute top-4 left-0">
        <span className="bg-white text-gray-700 rounded text-xs py-1 px-2">
          FOR SALE
        </span>
        <div className="flex items-center justify-center rounded-lg  cursor-pointer bg-white h-8 w-8 text-xl">
          <BiHeart className="text-indigo-400" />
        </div>
      </div>

      <div className="py-4 px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-700 text-xl font-semibold mb-2">
            {houseDetails.price}
          </h3>
        </div>
        {/* <h3 className="text-gray-700 text-lg mb-1 font-medium">
          {houseDetails.address}
        </h3> */}
        <p className="text-gray-400 text-sm font-poppins mb-4">{houseDetails.location}</p>

        {/* <div className="h-[1px] w-full bg-gray-200 my-4"></div> */}

        <div className="flex items-center justify-between mb-2">
        
          <Details Icon={<IoIosBed/>} title="3"/>
          <Details Icon={<TbBathFilled/>} title="2" type="secondary"/>
          <Details Icon={<RiRulerFill/>} title="60m" type="warning"/>

          
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
