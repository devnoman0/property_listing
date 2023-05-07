// import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Image from "next/image";

const Page = () => {
  //   const pathname = usePathname();
  //   const id = pathname.split("/")[2];

  return (
    <div>
      <Container>
        <div className="mt-4 rounded-2xl h-[50vh] overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width={1920}
            height={100}
            className="object-cover w-full h-full"
            alt="Property Image"
          />

          <div className="w-full h-[50vh] rounded-2xl absolute top-0 left-0 bg-black/20"></div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
