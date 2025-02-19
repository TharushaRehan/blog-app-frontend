// import { Play } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// interface Props {
//   image: string;
//   title: string;
//   description: string;
//   totalEpisodes: number;
//   averageEpisodeLength: string;
//   releaseFrequency: string;
// }

// const PodcastVideoCard = ({
//   image,
//   title,
//   description,
//   totalEpisodes,
//   averageEpisodeLength,
//   releaseFrequency,
// }: Props) => {
//   return (
// <div className="px-0 lg:px-20 space-y-10">
//   <div className="relative cursor-pointer">
//     <Image
//       src={image}
//       alt="Image"
//       className="w-full"
//       width={200}
//       height={200}
//     />
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div className="bg-white p-2 rounded-full">
//         <Play fill="black" color="black" />
//       </div>
//     </div>
//   </div>
//   <div className="space-y-2">
//     <p className="text-xl lg:text-2xl">{title}</p>
//     <p className="text-neutral-500 text-sm lg:text-base">{description}</p>
//   </div>
//   <div className="flex flex-col sm:flex-row w-full justify-between gap-5 sm:gap-10">
//     <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
//       <p className="text-neutral-500">Total Episodes</p>
//       <p>{totalEpisodes}</p>
//     </div>
//     <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
//       <p className="text-neutral-500">Average Episode Length</p>
//       <p>{averageEpisodeLength}</p>
//     </div>
//     <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
//       <p className="text-neutral-500">Release Frequency</p>
//       <p>{releaseFrequency}</p>
//     </div>
//   </div>
// </div>
//   );
// };

// export default PodcastVideoCard;

import { ArrowUpRight, Play, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  icon: string;
  title: string;
  stars: number;
  host: string;
  podcastImage: string;
  podcastTitle: string;
  podcastdescription: string;
  totalEpisodes: number;
  averageEpisodeLength: string;
  releaseFrequency: string;
}

const PodcastVideoCard = ({
  icon,
  title,
  stars,
  host,
  podcastImage,
  podcastTitle,
  podcastdescription,
  totalEpisodes,
  averageEpisodeLength,
  releaseFrequency,
}: Props) => {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:divide-y-0 lg:divide-x px-10">
      <div className="lg:w-1/3 py-10 flex flex-col gap-10 pr-0 lg:pr-10 w-full lg:self-center self-start">
        <Image
          src={icon}
          alt="Image"
          width={60}
          height={60}
          className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] self-start"
        />
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium">{title}</p>
          <Stars filledStarCount={stars} />
        </div>
        <div className="bg-neutral-900 p-5 flex justify-between items-center rounded-2xl border gap-10 md:gap-0">
          <div className="text-nowrap">
            <p className="text-neutral-500">Host</p>
            <p>{host}</p>
          </div>
          <Button className="bg-black gap-2 w-full sm:w-fit hover:bg-black/10 text-neutral-500">
            Listen Podcast
            <ArrowUpRight className="text-primary" />
          </Button>
        </div>
      </div>
      <div className="py-5 lg:py-10">
        <div className="px-0 lg:px-20 space-y-10">
          <div className="relative cursor-pointer">
            <Image
              src={podcastImage}
              alt="Image"
              className="w-full h-full"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-full">
                <Play fill="black" color="black" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl lg:text-2xl">{podcastTitle}</p>
            <p className="text-neutral-500 text-sm lg:text-base w-full max-w-[900px]">
              {podcastdescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between gap-5 sm:gap-10">
            <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
              <p className="text-neutral-500">Total Episodes</p>
              <p>{totalEpisodes}</p>
            </div>
            <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
              <p className="text-neutral-500">Average Episode Length</p>
              <p>{averageEpisodeLength}</p>
            </div>
            <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
              <p className="text-neutral-500">Release Frequency</p>
              <p>{releaseFrequency}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastVideoCard;

export const Stars = ({ filledStarCount }: { filledStarCount: number }) => {
  const stars = [];
  const unfilledStarCount = 5 - filledStarCount;

  for (let i = 0; i < filledStarCount; i++) {
    stars.push(<Star key={i} fill="#FFCE22" color="#FFCE22" size={24} />);
  }

  for (let i = 0; i < unfilledStarCount; i++) {
    stars.push(<Star key={i} fill="#3f3f3e" color="#3f3f3e" size={24} />);
  }

  return (
    <div className="flex gap-1 border px-4 py-2 rounded-full">{stars}</div>
  );
};
