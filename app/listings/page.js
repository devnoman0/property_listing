import Container from "@/components/Container";
import Filter from "@/components/Filter";
import ListingCard from "@/components/ListingCard";
import ListingContainer from "@/components/ListingContainer";
import React from "react";

const propertyDetails = [
  {
    id: 10,
    title: "Property Title",
    price: "71,900",
    location: "Montgomery, AL 36108",
    area: "1,242",
    bedroom: "3",
    bathroom: "2",
    image:
      "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 20,
    title: "Property Title",
    price: "139,000",
    location: "Milton, FL 32583",
    area: "920",
    bedroom: "3",
    bathroom: "2",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 30,
    title: "Property Title",
    price: "84,900",
    location: "Mobile, AL 36604",
    area: "1,664",
    bedroom: "3",
    bathroom: "2",
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80",
  },
  {
    id: 40,
    title: "Property Title",
    price: "32,500",
    location: "Birmingham, AL 35212",
    area: "957",
    bedroom: "3",
    bathroom: "2",
    image:
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const Listings = () => {
  return (
    <div>
      <Filter />
      <Container>
        <ListingContainer>
          {propertyDetails.map((property) => (
            <ListingCard key={property.id} data={property} />
          ))}
        </ListingContainer>
      </Container>
    </div>
  );
};

export default Listings;
