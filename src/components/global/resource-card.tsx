import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  image: string;
}

const ResourceCard = ({ title, description, image }: Props) => {
  return (
    <div className="w-full px-10">
      <Image
        src={image}
        alt="Image"
        className="w-full h-full"
        width={400}
        height={400}
      />
      <div className="space-y-5 mt-5 min-h-[110px]">
        <p className="text-xl">{title}</p>
        <p className="text-neutral-500 text-sm lg:text-base">{description}</p>
      </div>
      <div className="flex gap-10 mt-5">
        <Button variant={"outline"} className="text-neutral-500 ">
          View Details
        </Button>
        <Button variant={"outline"} className="text-neutral-500 ">
          Download PDF Now
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
