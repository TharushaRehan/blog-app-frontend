"use client";

import React, { useState } from "react";
import BlogCard from "@/components/global/blog-card";
import Header from "@/components/global/header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Heart, Play, Send } from "lucide-react";
import Image from "next/image";
import { newsFeaturedVideos, newsTags } from "@/constants";
import FeatureCard from "@/components/global/feature-card";
import NewsVideoVard from "@/components/global/news-video-card";

const NewsPage = () => {
  const [currentTag, setCurrentTag] = useState(newsTags[0]);
  return (
    <div className="">
      <section className="px-10 w-full h-[300px] flex flex-col gap-5 items-start justify-center border-b">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">
          Today&apos;s Headlines: Stay Informed
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. <br />
          Discover the world through our news coverage.
        </p>
      </section>
      <section className="px-10 py-10 border-b flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <Image
          src={"/images/news-image-1.svg"}
          alt="Image"
          width={400}
          height={400}
          className="w-full md:w-[400px] md:h-[400px]"
        />
        <div className="space-y-5 w-full">
          <p className="text-2xl md:text-3xl">
            Global Climate Summit Addresses Urgent Climate Action
          </p>
          <p className="text-sm md:text-base text-neutral-500">
            World leaders gathered at the Global Climate Summit to discuss
            urgent climate action, emissions reductions, and renewable energy
            targets.
          </p>
          <div className="flex gap-10">
            <div>
              <p className="text-sm md:text-base text-neutral-500">Category</p>
              <p>Environment</p>
            </div>
            <div>
              <p className="text-sm md:text-base text-neutral-500">
                Publication Date
              </p>
              <p>Environment</p>
            </div>
            <div>
              <p className="text-sm md:text-base text-neutral-500">Author</p>
              <p>Jane Smith</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                <Heart size={20} />
                <span>14k</span>
              </div>
              <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                <Send size={20} />
                <span>304</span>
              </div>
            </div>
            <Button variant={"outline"}>Read More</Button>
          </div>
        </div>
      </section>
      <section className="px-10 py-10 border-b flex flex-col md:flex-row flex-wrap gap-20 lg:gap-0 justify-between">
        <div className="space-y-3">
          <Image
            src={"/images/news-image-2.svg"}
            alt="Image"
            width={400}
            height={200}
            className="w-full"
          />
          <div className="space-y-5">
            <div className="space-y-1">
              <p>A Decisive Victory for Progressive Policies</p>
              <p className="text-sm md:text-base text-neutral-500">Politics</p>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                  <Heart size={18} />
                  <span className="text-sm">14k</span>
                </div>
                <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                  <Send size={18} />
                  <span className="text-sm">304</span>
                </div>
              </div>
              <Button variant={"outline"} className="">
                Read More
                <ArrowUpRight className="text-primary ml-3" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Image
            src={"/images/news-image-3.svg"}
            alt="Image"
            width={400}
            height={200}
            className="w-full"
          />
          <div className="space-y-5">
            <div className="space-y-1">
              <p>A Decisive Victory for Progressive Policies</p>
              <p className="text-sm md:text-base text-neutral-500">Politics</p>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                  <Heart size={18} />
                  <span className="text-sm">14k</span>
                </div>
                <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                  <Send size={18} />
                  <span className="text-sm">304</span>
                </div>
              </div>
              <Button variant={"outline"} className="">
                Read More
                <ArrowUpRight className="text-primary ml-3" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Image
            src={"/images/news-image-4.svg"}
            alt="Image"
            width={400}
            height={200}
            className="w-full"
          />
          <div className="space-y-5">
            <div className="space-y-1">
              <p>A Decisive Victory for Progressive Policies</p>
              <p className="text-sm md:text-base text-neutral-500">Politics</p>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-5">
                <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                  <Heart size={18} />
                  <span className="text-sm">14k</span>
                </div>
                <div className="text-neutral-500 w-fit flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
                  <Send size={18} />
                  <span className="text-sm">304</span>
                </div>
              </div>
              <Button variant={"outline"} className="">
                Read More
                <ArrowUpRight className="text-primary ml-3" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Header
        header="Welcome to Our News Hub"
        subheader="Discover the World of Headlines"
        button={
          <Button className="bg-black text-white gap-2 w-full sm:w-fit hover:bg-black/10">
            View All News <ArrowUpRight className="text-primary" />
          </Button>
        }
      />
      <section className="py-10 px-10">
        <div className="flex overflow-x-auto gap-10 border-b pb-10">
          {newsTags.map((tag) => {
            const isActive = currentTag === tag;
            return (
              <div
                key={tag}
                onClick={() => setCurrentTag(tag)}
                className={`border w-[250px] min-w-[250px] text-center py-2 rounded-lg cursor-pointer text-lg flex-shrink-0 ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-neutral-500 hover:text-white transition-all duration-300"
                }`}
              >
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
        <div className="py-10 space-y-10">
          <BlogCard
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            occupation="Software Engineer"
            blogTitle="The Quantum Leap in Computing"
            blogContent="Explore the revolution in quantum computing, its applications, and its potential impact on various industries."
            uploadDate="October 15, 2023"
            likes={24.5}
            comments={50}
            shares={20}
          />
          <BlogCard
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            occupation="Software Engineer"
            blogTitle="The Quantum Leap in Computing"
            blogContent="Explore the revolution in quantum computing, its applications, and its potential impact on various industries."
            uploadDate="October 15, 2023"
            likes={24.5}
            comments={50}
            shares={20}
          />
        </div>
      </section>
      <Header
        header="Featured Videos"
        subheader="Visual Insights for the Modern Viewer"
        button={
          <Button className="bg-black text-white gap-2 w-full sm:w-fit hover:bg-black/10">
            View All
            <ArrowUpRight className="text-primary" />
          </Button>
        }
      />
      <section className="px-10 divide-y">
        <div className="flex w-full flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x items-center">
          {newsFeaturedVideos
            .slice(0, 2)
            .map(({ image, time, title, description }) => (
              <NewsVideoVard
                key={title}
                title={title}
                time={time}
                image={image}
                description={description}
              />
            ))}
        </div>
        <div className="flex w-full flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x items-center">
          {newsFeaturedVideos
            .slice(2, 4)
            .map(({ image, time, title, description }) => (
              <NewsVideoVard
                key={title}
                title={title}
                time={time}
                image={image}
                description={description}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
