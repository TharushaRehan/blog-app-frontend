import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  time: string;
  title: string;
  description: string;
}

const LatestPodcastEpisode = ({ image, time, title, description }: Props) => {
  return (
    <div className="w-full py-10 px-0 lg:px-10 xl:px-20 self-start">
      <Image
        src={image}
        alt="Image"
        height={40}
        width={500}
        className="w-full"
      />
      <div className="flex justify-between px-10">
        <div className="p-2 lg:p-3 bg-white rounded-full flex items-center justify-center relative bottom-16 sm:bottom-16 lg:bottom-24">
          <Play fill="black" color="black" />
        </div>
        <p className="text-neutral-500 relative bottom-10 lg:bottom-16">
          {time}
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-xl lg:text-2xl">{title}</p>
        <p className="text-neutral-500 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default LatestPodcastEpisode;
