"use client";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/4.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-10 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="max-w-[500px] text-center font-pathway text-5xl text-[#DCCF90] md:leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Dining Experience
          </h1>
          <p className="max-w-[450px] text-center font-[500] leading-[160%] text-[#ffff]">
            Savor the rich and authentic flavors of Turkey at Ephesus, where
            every dish is crafted with passion and tradition. From perfectly
            grilled kebabs to fresh, flavorful mezes, each bite brings you
            closer to the heart of Turkish cuisine. Whether you are gathering
            for a casual meal or celebrating a special occasion, let our warm
            hospitality and inviting atmosphere make every moment truly
            memorable.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#000]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
