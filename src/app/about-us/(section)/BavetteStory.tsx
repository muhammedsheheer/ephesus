"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <h2 className="text-center font-pathway text-5xl text-[#DCCF90] md:left-[15%] md:text-8xl">
          The Ephesus
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-pathway text-5xl text-[#DCCF90] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-poppins font-light leading-[160%] text-[#9C9E9F] md:text-start">
              Nestled in the heart of our community, Ephesus is more than just a
              restaurant—it’s a gateway to the rich and vibrant culinary
              traditions of Turkey. Inspired by the flavors of the ancient city
              of Ephesus, we bring you an authentic dining experience that
              captures the essence of Turkish culture, where every dish tells a
              story of tradition, passion, and craftsmanship. <br /> <br /> Our
              menu takes you on a journey through the most iconic flavors of
              Turkey, from succulent, flame-grilled kebabs to the delicate
              sweetness of baklava. Each dish is carefully crafted using
              time-honored recipes and the finest ingredients, ensuring an
              unforgettable dining experience. Paired with warm Turkish
              hospitality and a welcoming ambiance, Ephesus is not just a place
              to dine—it’s a celebration of heritage, flavor, and togetherness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
