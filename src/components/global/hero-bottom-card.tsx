import { ArrowUpRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  navigation: string;
  containerClasses?: string;
}

const HeroBottomCard = ({
  image,
  title,
  subtitle,
  description,
  navigation,
  containerClasses,
}: Props) => {
  return (
    <div
      className={`flex-grow flex justify-between py-5 items-center ${containerClasses}`}
    >
      <div className="space-y-5">
        <Image src={image} alt="Icon" height={40} width={40} />
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-neutral-500 text-sm">{subtitle}</p>
        </div>
        <p className="text-neutral-500">{description}</p>
      </div>
      <Link href={navigation}>
        <Button className="rounded-full p-2.5">
          <ArrowUpRight size={24} />
        </Button>
      </Link>
    </div>
  );
};

export default HeroBottomCard;
