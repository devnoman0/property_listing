import Container from "@/components/Container";
import Feature from "@/components/Feature";
import Filter from "@/components/Filter";
import ListingCard from "@/components/ListingCard";
import ListingContainer from "@/components/ListingContainer";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <section>
      <Filter />
      <Container>
        <ListingContainer>
          <ListingCard />
          <ListingCard />
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

          <ListingCard />
          <ListingCard />
        </ListingContainer>
      </Container>

      <section className="py-20">
        <Container>
          <Feature />
        </Container>
      </section>
    </section>
  );
}
