"use client";
import React from "react";
import Dropdown from "./Dropdown";
import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";

const bedrooms = [
  { value: "All Bedrooms" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
];

const bathrooms = [
  { value: "All Baths" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
];

const Filter = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(formState.errors);
  };

  return (
    <div className="py-4">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="flex items-center gap-2 w-full md:col-span-2  bg-gray-200 py-3 px-6 text-left rounded-xl focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm">
              <BiSearch className="text-gray-700 text-xl" />
              <input
                {...register("address")}
                type="text"
                className="w-full bg-transparent placeholder:text-gray-700 outline-none"
                placeholder="Street, City, State, Zip or keyword"
              />
            </div>

            <Dropdown name="bedroom" options={bedrooms} register={register} />
            <Dropdown name="bathroom" options={bathrooms} register={register} />

            <Input
              register={register}
              name="price"
              type="text"
              className="relative w-full rounded-xl bg-gray-200 placeholder:text-gray-700 py-3 px-6 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm"
              placeholder="Price To ($)"
            />
            <Button disabled={formState.isSubmitting}>SEARCH</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Filter;
