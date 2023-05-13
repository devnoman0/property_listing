import Container from "@/components/Container";
import Feature from "@/components/Feature";
import Filter from "@/components/Filter";
import ListingCard from "@/components/ListingCard";
import ListingContainer from "@/components/ListingContainer";
import { Suspense } from "react";

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

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <section>
      <Filter />
      <Container>
        <ListingContainer>
          <div className="hidden rounded-xl overflow-hidden md:hidden col-span-2 row-span-2 bg-gray-100 lg:flex">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14591.767542441325!2d89.12295160000001!3d23.89167935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683050015509!5m2!1sen!2sbd"
              width="600"
              height="450"
              className="h-full w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
          {propertyDetails.map((property) => (
            <ListingCard key={property.id} data={property} />
          ))}
        </ListingContainer>
      </Container>

      <section className="py-20 bg-[#F5F8FF] my-20">
        <Container>
          <Feature />
        </Container>
      </section>
    </section>
  );
}
