import { footerItems } from "@/constants";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="pb-10">
      <div className="bg-white/5">
        <div className="flex flex-col md:flex-row py-20 px-10 lg:px-20 gap-10 lg:gap-20 items-center mb-0 md:mb-10">
          <Image
            src={"/logo/logo.svg"}
            alt="Logo"
            width={100}
            height={100}
            className="w-[100px] h-[100px] max-w-[150px] max-h-[150px] self-start lg:self-center"
          />
          <div className="space-y-5">
            <p className="bg-white/10 w-fit px-5 py-2 rounded-lg text-sm md:text-base">
              Learn, Connect, and Innovate
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl">
              Be Part of the Future Tech Revolution
            </p>
            <p className="text-neutral-500">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className="pb-20 mb-10 px-10 lg:px-20">
          <div className="bg-black p-3 flex flex-col md:flex-row gap-5 items-center justify-between rounded-xl border">
            <div className="bg-white/10 px-5 py-8 space-y-5 rounded-xl border">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">Resource Access</p>
                <div className="bg-primary p-2 rounded-full w-fit">
                  <ArrowUpRight color="black" />
                </div>
              </div>
              <p className="text-sm md:text-base text-neutral-500">
                Visitors can access a wide range of resources, including ebooks,
                whitepapers, reports.
              </p>
            </div>
            <div className="bg-white/10 px-5 py-8 space-y-5 rounded-xl border">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">Resource Access</p>
                <div className="bg-primary p-2 rounded-full w-fit">
                  <ArrowUpRight color="black" />
                </div>
              </div>
              <p className="text-sm md:text-base text-neutral-500">
                Visitors can access a wide range of resources, including ebooks,
                whitepapers, reports.
              </p>
            </div>
            <div className="bg-white/10 px-5 py-8 space-y-5 rounded-xl border">
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">Resource Access</p>
                <div className="bg-primary p-2 rounded-full w-fit">
                  <ArrowUpRight color="black" />
                </div>
              </div>
              <p className="text-sm md:text-base text-neutral-500">
                Visitors can access a wide range of resources, including ebooks,
                whitepapers, reports.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-10">
        {footerItems.slice(0, 4).map((item) => (
          <div key={item.title} className="space-y-5 self-start mb-10 lg:mb-0">
            <p className="text-lg font-bold">{item.title}</p>
            <div className="space-y-2">
              {item.navLists.map((nav) => (
                <p
                  key={nav}
                  className="cursor-pointer hover:opacity-50 transition-all duration-300 capitalize text-neutral-500"
                >
                  {nav}
                </p>
              ))}
            </div>
          </div>
        ))}
        {footerItems.slice(4).map((item) => (
          <div key={item.title} className="space-y-5 self-start">
            <p className="text-lg font-bold">{item.title}</p>
            <div className="space-y-2">
              {item.navLists.map((nav) => (
                <p
                  key={nav}
                  className="cursor-pointer hover:opacity-50 transition-all duration-300 capitalize flex items-center gap-2 border rounded-lg px-5 py-2 text-neutral-500 text-nowrap w-fit"
                >
                  {nav}
                  <ArrowUpRight className="text-primary" size={18} />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 md:gap-24 mt-10 border-t pt-10">
        <div className="flex gap-10">
          <p className="cursor-pointer hover:opacity-50 transition-all duration-300">
            Terms & Conditions
          </p>
          <p className="cursor-pointer hover:opacity-50 transition-all duration-300">
            Privacy Policy
          </p>
        </div>
        <div className="flex gap-5">
          <Twitter
            fill="white"
            size={20}
            className="cursor-pointer hover:opacity-50 transition-all duration-300"
          />
          <Linkedin
            fill="white"
            size={20}
            className="cursor-pointer hover:opacity-50 transition-all duration-300"
          />
          <Instagram
            fill="white"
            color="black"
            size={20}
            className="cursor-pointer hover:opacity-50 transition-all duration-300"
          />
        </div>
        <p>© 2024 FutureTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
