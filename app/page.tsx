import { seedProductData } from "@/actions/products";
import Hero from "./_components/Hero";
import BookSwipers from "./_components/BookSwipers";

export default async function Home() {
  return (
    <section className="px-8 py-7 lg:px-20">
      <div>
        <Hero />
      </div>
      <div className="my-8 flex flex-col space-y-[20vh] md:space-y-[16vh] lg:space-y-[16vh]">
        <BookSwipers categoryTitle="Best Sellers" category="" />
        <BookSwipers categoryTitle="Best Fiction" category="Fiction" />
        <BookSwipers categoryTitle="Best Romance" category="Romance" />
      </div>
    </section>
  );
}
