"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#111] px-4 pb-5 pt-12 lg:px-10 lg:pt-20">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="h-1 w-full border-b-[1px] border-b-[#DCCF90] md:w-[40%]" />
          <div className="flex w-full items-center justify-center md:w-[20%]">
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-60 md:w-full"
              />
            </Link>
          </div>
          <div className="h-1 w-full border-b-[1px] border-b-[#DCCF90] md:w-[40%]" />
        </div>
        {/* big screen */}
        <div className="hidden flex-col items-center justify-center gap-6 md:flex md:flex-row md:gap-60">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
            <div className="flex flex-col items-center justify-center">
              <Link
                href={"https://maps.app.goo.gl/hgqbKYySZxXb9ZDDA"}
                className="text-center font-inter text-sm font-[300] text-[#DCCF90]"
              >
                575 Bury Rd, Rochdale <br />
                OL11 4DQ, United Kingdom
              </Link>
              <Link
                href={"tel:+44706557337"}
                className="font-inter text-sm font-[300] text-[#DCCF90]"
              >
                +44706557337
              </Link>
              {/* <Link
                href={"mailto:info@galatahuyton.co.uk"}
                className="font-inter text-sm font-[300] text-[#DCCF90]"
              >
                info@galatahuyton.co.uk
              </Link> */}
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-inter text-base font-[300] text-[#DCCF90]">
                Opening hours
              </span>
              <span className="text-center font-inter text-sm font-[300] text-[#DCCF90]">
                We are open 7 days a week
                <br />
                Monday - Thursday: 16:00 - 23:00
                <br />
                Friday - Sunday: 12:00 - 23:30
              </span>
            </div>
            <div className="flex flex-row gap-4">
              {/* <Link
                href={"https://www.instagram.com/solastasteakhouse/"}
                target="_blank"
              >
                <Icons.instagram className="text-[#DCCF90]" />
              </Link> */}
              <Link
                href={"https://maps.app.goo.gl/hgqbKYySZxXb9ZDDA"}
                target="_blank"
              >
                <Icons.google className="text-[#DCCF90]" />
              </Link>
              {/* <Link
                href={"https://www.facebook.com/solastaliverpool"}
                target="_blank"
              >
                <Icons.facebook className="text-[#DCCF90]" />
              </Link> */}
            </div>
          </div>
          <div>
            <div className="hidden h-60 w-1 border-r-[1px] border-r-[#DCCF90] md:block" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Link
              href={"/"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Our Story
            </Link>
            <Link
              href={"/contact"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Contact
            </Link>
            <Link
              href={"/table-booking"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Table Booking
            </Link>
          </div>
        </div>
        {/*mobile screen */}

        <div className="flex flex-col gap-3 md:hidden md:flex-row md:gap-60">
          <div className="flex flex-col items-start justify-start gap-5 md:gap-8">
            <div className="flex flex-col items-start justify-start">
              <Link
                href={"https://maps.app.goo.gl/hgqbKYySZxXb9ZDDA"}
                className="font-inter text-sm font-[300] text-[#DCCF90]"
              >
                575 Bury Rd, Rochdale <br />
                OL11 4DQ, United Kingdom
              </Link>
              <Link
                href={"tel:+44706557337"}
                className="font-inter text-sm font-[300] text-[#DCCF90]"
              >
                +44706557337
              </Link>
              {/* <Link
                href={"mailto:info@galatahuyton.co.uk"}
                className="font-inter text-sm font-[300] text-[#DCCF90]"
              >
                info@galatahuyton.co.uk
              </Link> */}
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="font-inter text-base font-[300] text-[#DCCF90]">
                Opening hours
              </span>
              <span className="text-start font-inter text-sm font-[300] text-[#DCCF90]">
                We are open 7 days a week
                <br />
                Monday - Thursday: 16:00 - 23:00
                <br />
                Friday - Sunday: 12:00 - 23:30
              </span>
            </div>
            <div className="flex flex-row gap-4">
              {/* <Link
                href={"https://www.instagram.com/solastasteakhouse/"}
                target="_blank"
              >
                <Icons.instagram className="text-[#DCCF90]" />
              </Link> */}
              <Link
                href={"https://maps.app.goo.gl/hgqbKYySZxXb9ZDDA"}
                target="_blank"
              >
                <Icons.google className="text-[#DCCF90]" />
              </Link>
              {/* <Link
                href={"https://www.facebook.com/solastaliverpool"}
                target="_blank"
              >
                <Icons.facebook className="text-[#DCCF90]" />
              </Link> */}
            </div>
          </div>
          <div>
            <div className="hidden h-60 w-1 border-r-[1px] border-r-[#DCCF90] md:block" />
          </div>
          <div className="flex flex-col items-end justify-end gap-3">
            <Link
              href={"/"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Our Story
            </Link>
            <Link
              href={"/contact"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Contact
            </Link>
            <Link
              href={"/table-booking"}
              className={
                "text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#DCCF90] md:text-base"
              }
            >
              Table Booking
            </Link>
          </div>
        </div>
        <div className="h-1 w-full border-b-[1px] border-b-[#DCCF90]" />
        <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:justify-between">
          <span className="font-cormorant text-start text-base font-[400] text-[#DCCF90] md:text-base">
            © 2025 Ephesus , All Rights Reserved
          </span>
          <Link href={"https://foodo.ai"} target="_blank">
            <span className="font-cormorant text-start text-base font-[400] text-[#DCCF90] md:text-base">
              Powerd By Foodo
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
