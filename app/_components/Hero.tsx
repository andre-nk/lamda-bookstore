import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container my-24 flex flex-col items-center justify-center space-y-20 lg:mb-[20vh] lg:mt-[10vh] lg:flex-row lg:justify-between lg:space-x-[10%] lg:space-y-0">
        <div className="flex flex-col items-center justify-center rounded-sm text-center lg:w-[80%] lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="font-serif text-3xl font-normal md:text-4xl lg:text-[50px] lg:leading-tight">
            Unlock endless worlds - Where every page turns into an adventure!
          </h1>
        </div>
        <div className="relative mt-8 flex aspect-auto h-[30vh] w-full items-center justify-center p-6 lg:mt-0 lg:h-[50vh]">
          <Image src="/image/hero.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
