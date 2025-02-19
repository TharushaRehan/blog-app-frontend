import Header from "@/components/global/header";
import LatestPodcastEpisode from "@/components/global/latest-podcast-episode";
import PodcastVideoCard from "@/components/global/podcast-video-card";
import { Button } from "@/components/ui/button";
import { latestPodcastVideos, podcasts } from "@/constants";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const PodcastsPage = () => {
  return (
    <div>
      <section className="px-10 w-full h-[300px] flex flex-col gap-5 items-start justify-center border-b">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">
          Unlock the World of Artificial Intelligence through Podcasts
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          Dive deep into the AI universe with our collection of insightful
          podcasts. Explore the latest trends, breakthroughs, and discussions on
          artificial intelligence.
          <br />
          Whether you&apos;re an enthusiast or a professional, our AI podcasts
          offer a gateway to knowledge and innovation.
        </p>
      </section>
      <section className="divide-y">
        {podcasts.map((podcast) => (
          <PodcastVideoCard
            key={podcast.title}
            title={podcast.title}
            icon={podcast.icon}
            stars={podcast.stars}
            host={podcast.host}
            podcastImage={podcast.podcastImage}
            podcastTitle={podcast.podcastTitle}
            podcastdescription={podcast.podcastDescription}
            totalEpisodes={podcast.totalEpisodes}
            averageEpisodeLength={podcast.averageEpisodeLength}
            releaseFrequency={podcast.releaseFrequency}
          />
        ))}
      </section>
      <Header
        header="Stay Informed with Fresh Content"
        subheader="Latest Podcast Episodes"
      />
      <section className="px-10 py-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:gap-10 lg:gap-0">
          {latestPodcastVideos.map((podcast) => (
            <LatestPodcastEpisode
              key={podcast.title}
              title={podcast.title}
              description={podcast.description}
              image={podcast.image}
              time={podcast.time}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PodcastsPage;
