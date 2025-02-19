import { ArrowUpRight } from "lucide-react";
import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-black flex gap-0 sm:gap-3 items-center justify-between sm:justify-center py-3 px-5 sm:px-0">
      <p className="text-sm md:text-base text-neutral-500 hover:text-primary/80 cursor-pointer transition-all duration-500 hover:underline hover:underline-offset-8 text-center flex gap-2">
        Subscribe to our Newsletter For New & latest Blogs and Resources
        <ArrowUpRight className="text-primary" />
      </p>
    </div>
  );
};

export default TopBanner;
