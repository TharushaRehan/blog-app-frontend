"use client";

import { navItems } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TopBanner from "./top-banner";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <TopBanner />
      <div className="flex items-center justify-between py-5 px-10 border-t border-b">
        <Logo />
        <div className="hidden sm:flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = item.url === pathname;
            return (
              <div
                key={item.url}
                className={`p-3 ${
                  isActive ? "bg-black border rounded-lg" : "text-neutral-500"
                }`}
              >
                <Link href={item.url}>{item.name}</Link>
              </div>
            );
          })}
        </div>
        <Link href={"contact"}>
          <Button className="hidden sm:flex text-base">Contact Us</Button>
        </Link>
        <div className="cursor-pointer bg-primary px-2 py-1 rounded-lg block sm:hidden">
          <Menu className="text-black" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
