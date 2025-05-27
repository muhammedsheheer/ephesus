import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="relative flex h-full w-full bg-[#000] px-4 pb-20 pt-12 md:px-16 md:pb-60 md:pt-16">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/about/bg1.png"}
          alt="background"
          width={1024}
          height={564}
          className="z-0 h-full w-full md:h-[500px]"
        />
      </div>
      <div className="z-40 flex w-full flex-col items-center justify-center gap-6 md:mt-8 md:gap-10">
        <motion.h6
          className="text-center font-pathway text-4xl font-[400] uppercase tracking-[5px] text-[#DCCF90] md:text-5xl md:tracking-[10px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          About us
        </motion.h6>
        <motion.h6
          className="z-40 text-center font-open_sans text-7xl font-[600] uppercase md:mt-14 md:text-[250px]"
          style={{
            background: "linear-gradient(180deg, #DCCF90 100%, #171711 20%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Ephesus
        </motion.h6>
        <div className="flex flex-col gap-4 md:mr-[20%] md:mt-28 md:flex-row">
          <p className="max-w-[400px] font-inter text-sm font-[400] text-[#C1B6A6] md:text-base">
            We bring the finest cuts of beef to Ephesus with a commitment to
            quality and sustainability. Embracing the city`s vibrant culinary
            heritage, each dish reflects our dedication to responsible sourcing.
            Experience dining that honors both our guests and the environment.
          </p>

          <Link href={"/table-booking"}>
            <Button className="font-cinzel mt-4 flex flex-row items-center justify-center gap-2 rounded-none border border-[#FFCA4E] bg-transparent px-4 py-5 text-sm font-[500] uppercase text-[#fff] hover:bg-[#FFCA4E] hover:text-[#fff] md:mb-8 md:mt-[60%] md:px-5 md:py-6">
              Book Now
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
