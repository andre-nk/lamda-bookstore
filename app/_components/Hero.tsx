import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-12 items-center lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center items-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:w-[50%]">
          <h1 className="text-[50px] font-serif font-normal leading-none sm:text-4xl">
            Unlock endless worlds - Where every page turns into an adventure!
          </h1>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Image src="/image/hero.svg" alt="" width={500} height={384} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

