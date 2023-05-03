import Container from "@/components/Container";
import Filter from "@/components/Filter";
import ListingCard from "@/components/ListingCard";
import ListingContainer from "@/components/ListingContainer";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <section>
      <Filter />
      <Container>
        {/* <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-7xl font-roxborough font-semibold text-gray-800 text-center">
            Sell Your House directly <br /> to Us
          </h1>

          <p
            className="
          text-lg
          text-gray-500 
          text-center mt-6 mb-10
          max-w-[600px]
          "
          >
            Living provides valuation, sell, buy, mortgage, invest property and
            other real estate services worldwide.
          </p>

          <SearchBox/>
        </div> */}
        <ListingContainer>
          <div className="hidden rounded-3xl overflow-hidden md:hidden col-span-2 row-span-2 bg-gray-100 lg:flex">
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

          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </ListingContainer>
      </Container>
    </section>
  );
}
