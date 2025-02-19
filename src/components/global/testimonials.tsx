import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  fullname: string;
  image: string;
  location: string;
  testimonials: string;
  stars: number;
  containerClasses?: string;
}

const Testimonials = ({
  fullname,
  image,
  location,
  testimonials,
  stars,
  containerClasses,
}: Props) => {
  const filledStars = Math.floor(stars);
  const emptyStars = 5 - filledStars;
  return (
    <div
      className={`w-full md:max-w-[450px] flex flex-col gap-5 border bg-black rounded-xl px-8 md:px-10 py-5 justify-center items-center`}
    >
      <div className="flex gap-5 items-center">
        <Image
          src={image}
          alt="Icon"
          height={70}
          width={70}
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
        <div className="space-y-1">
          <p className="text-base md:text-lg font-bold">{fullname}</p>
          <p className="text-neutral-500 text-sm">{location}</p>
        </div>
      </div>
      <p className="items-center text-center">{testimonials}</p>
      <div className="flex gap-1 px-3 py-1 rounded-2xl border-2">
        {Array(filledStars)
          .fill(null)
          .map((_, index) => (
            <Star key={index} size={20} color="gold" fill="gold" />
          ))}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <Star key={index} size={20} color="gray" />
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
