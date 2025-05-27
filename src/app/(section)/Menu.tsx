import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Turkish Guvec", image: "/images/home/menu/1.png" },
  { title: "Meze platter", image: "/images/home/menu/2.png" },
  { title: "Kebab platter", image: "/images/home/menu/3.png" },
];

const Menu: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black px-2 py-8 md:px-40 md:py-20">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/menu/bg.png"}
          width={1920}
          height={1974}
          alt={"bg"}
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="z-40 flex flex-col gap-16 px-4 md:px-0">
        {/* Title */}
        <div className="flex flex-col">
          <h1 className="text-center font-pathway text-4xl font-[400] uppercase tracking-[5px] text-[#DCCF90] md:text-5xl md:tracking-[10px]">
            Our MENU
          </h1>
          <div className="flex items-center justify-center">
            <Link href={"/menu"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase text-[#fff] md:px-12 md:py-10"
                variant="imageInverted"
              >
                Menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="z-40 grid grid-cols-1 gap-6 md:grid-cols-3">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <Link href={"/menu"} target="_blank">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-[300px] w-full object-cover md:h-[400px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </Link>
              <h1 className="text-center font-pathway text-xl font-[400] uppercase tracking-[3px] text-[#DCCF90] md:text-3xl md:tracking-[5px]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
