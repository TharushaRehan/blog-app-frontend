"use client";

import BlogCard from "@/components/global/blog-card";
import FeatureCard from "@/components/global/feature-card";
import Header from "@/components/global/header";
import HeroBottomCard from "@/components/global/hero-bottom-card";
import Testimonials from "@/components/global/testimonials";
import { Button } from "@/components/ui/button";
import { avatars, tags } from "@/constants";
import { ArrowUpRight, Eye, Plus } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const [currentTag, setCurrentTag] = useState(tags[0]);

  //

  //
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y w-full lg:divide-x lg:divide-y-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 5 }}
          className="divide-y"
        >
          <div className="flex flex-col justify-center gap-10 px-10 py-16">
            <p className="text-neutral-500 text-2xl font-bold">
              Your Journey to Tomorrow Begins Here
            </p>
            <p className="text-5xl">
              Explore the Frontiers of <br /> Artificial Intelligence
            </p>
            <p className="text-neutral-500 text-sm md:text-base">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <div className="grid grid-cols-3 divide-x h-fit">
            <div className="flex flex-col gap-2 items-center py-10">
              <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
                300{" "}
                <Plus className="text-primary size-8 md:size-16 lg:size-20" />
              </p>
              <p className="text-neutral-500 text-sm md:text-base text-center">
                Resources Avalailable
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center  py-10">
              <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
                12k{" "}
                <Plus className="text-primary size-8 md:size-16 lg:size-20" />
              </p>
              <p className="text-neutral-500 text-sm md:text-base text-center">
                Total Downloads
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center  py-10">
              <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
                10k{" "}
                <Plus className="text-primary size-8 md:size-16 lg:size-20" />
              </p>
              <p className="text-neutral-500 text-sm md:text-base text-center">
                Active Users
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 5 }}
        >
          <div
            className="relative h-full w-full bg-cover bg-no-repeat bg-transparent"
            style={{ backgroundImage: "url(/images/Abstract-Design.svg)" }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 flex flex-col w-full h-full justify-center px-10 lg:py-0 py-20">
              <div className="space-y-8">
                <div className="flex">
                  {avatars.map((avatar, index) => (
                    <Image
                      key={avatar}
                      src={avatar}
                      alt="avatar"
                      width={40}
                      height={40}
                      className={`${index !== 0 && "-ml-2"}`}
                    />
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-xl">Explore 1000+ resources</p>
                  <p className="text-neutral-500">
                    Over 1,000 articles on emerging tech trends and
                    breakthroughs.
                  </p>
                </div>{" "}
                <Button variant={"outline"} className="gap-2 w-fit">
                  Exlpore Resources
                  <ArrowUpRight className="text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 3 }}
        className="px-10 grid grid-cols-1 md:grid-cols-3 border-t divide-y lg:divide-x lg:divide-y-0"
      >
        <HeroBottomCard
          image="/icons/icon-1.svg"
          title="Latest News Updates"
          subtitle="Stay Current"
          description=" Over 1,000 articles published monthly"
          navigation=""
          containerClasses="pr-0 sm:pr-10"
        />
        <HeroBottomCard
          image="/icons/icon-2.svg"
          title="Latest News Updates"
          subtitle="Stay Current"
          description=" Over 1,000 articles published monthly"
          navigation=""
          containerClasses="px-0 sm:px-10"
        />
        <HeroBottomCard
          image="/icons/icon-3.svg"
          title="Latest News Updates"
          subtitle="Stay Current"
          description=" Over 1,000 articles published monthly"
          navigation=""
          containerClasses="pl-0 sm:pl-10"
        />
      </motion.div>
      <Header header="Unlock the Power of" subheader="FutureTech Features" />

      <div className="divide-y px-10">
        <div className="flex w-full flex-col lg:flex-row lg:divide-x items-center">
          <div className="space-y-6 py-10 w-full border-b lg:border-none">
            <Image src="/icons/icon-4.svg" alt="Icon" height={40} width={40} />
            <div className="space-y-3">
              <p className="text-4xl">Future Technology Blog</p>
              <p className="text-neutral-500">
                Stay informed with our blog section dedicated to future
                technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full space-y-5 py-10">
            <div className="flex flex-col md:flex-row gap-5">
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row lg:divide-x items-center">
          <div className="space-y-6 py-10 w-full border-b lg:border-none">
            <Image src="/icons/icon-5.svg" alt="Icon" height={40} width={40} />
            <div className="space-y-3">
              <p className="text-4xl">Research Insights Blogs</p>
              <p className="text-neutral-500">
                Dive deep into future technology concepts with our research
                section.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full space-y-5 py-10">
            <div className="flex flex-col md:flex-row gap-5">
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
              <FeatureCard
                title="Quantity"
                description="Over 1,000 articles on emerging tech trends and breakthroughs."
              />
            </div>
          </div>
        </div>
      </div>
      <Header
        header="A Knowledge Treasure Trove"
        subheader="Explore FutureTech's In-Depth Blog Posts"
        button={
          <Button className="bg-black text-white gap-2 w-full sm:w-fit">
            View All Blogs <ArrowUpRight className="text-primary" />
          </Button>
        }
      />
      <section className="py-10 px-10">
        <div className="flex overflow-x-auto gap-10 border-b pb-10">
          {tags.map((tag) => {
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
        header="Your Gateway to In-Depth Information"
        subheader="Unlock Valuable Knowledge with FutureTech's Resources"
        button={
          <Button className="bg-black text-white gap-2 w-full sm:w-fit">
            View All Resources <ArrowUpRight className="text-primary" />
          </Button>
        }
      />
      <section className="divide-y">
        <div className="w-full flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 lg:items-center">
          <div className="space-y-10 px-10 py-20 lg:w-1/2">
            <Image
              src={"/icons/icon-12.svg"}
              alt="Icon"
              width={60}
              height={60}
            />
            <div className="space-y-2">
              <p className="font-bold text-3xl">Ebooks</p>
              <p className="text-neutral-500">
                Explore our collection of ebooks covering a wide spectrum of
                future technology topics.
              </p>
            </div>
            <Button variant={"outline"} className="gap-2 items-center">
              Download Ebooks Now <ArrowUpRight className="text-primary" />
            </Button>
            <div className="flex gap-10 bg-white/5 w-fit py-5 rounded-lg px-10 items-center justify-between border">
              <div>
                <p className="text-neutral-500">Bownloaded By</p>
                <p>10k + Users</p>
              </div>
              <div className="flex ">
                {avatars.map((avatar, index) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className={`${index !== 0 && "-ml-2"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="px-10 space-y-10 py-20">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:items-center lg:justify-between">
              <p className="text-nowrap text-xl">Variety of Topics</p>
              <p className="text-neutral-500">
                Whitepapers cover quantum computing (20%), AI ethics (15%),
                space mining prospects (20%), AI in healthcare (15%), and
                renewable energy strategies (30%).
              </p>
            </div>
            <Image
              src={"/images/home-image-1.svg"}
              alt="Image"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="flex flex-col md:flex-row gap-10">
              <div className="bg-white/5 md:w-fit py-5 rounded-lg px-10 border text-nowrap w-full">
                <p className="text-neutral-500">Total Ebooks</p>
                <p>Over 50 Ebooks</p>
              </div>
              <div className="bg-white/5 py-5 rounded-lg px-10 border flex w-full justify-between items-center">
                <div>
                  <p className="text-neutral-500">Download Formats</p>
                  <p>PDF format for access.</p>
                </div>
                <Button variant={"outline"} className="gap-2">
                  Preview <Eye className="text-primary" />
                </Button>
              </div>
            </div>
            <div className="bg-white/5 py-5 rounded-lg px-10 border">
              <p className="text-neutral-500">Average Author Expertise</p>
              <p>
                Ebooks are authored by renowned experts with an average of 15
                years of experience.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 lg:items-center">
          <div className="space-y-10 px-10 py-20 lg:w-1/2">
            <Image
              src={"/icons/icon-13.svg"}
              alt="Icon"
              width={60}
              height={60}
            />
            <div className="space-y-2">
              <p className="font-bold text-3xl">Whitepapers</p>
              <p className="text-neutral-500">
                Dive into comprehensive reports and analyses with our collection
                of whitepapers.
              </p>
            </div>
            <Button variant={"outline"} className="gap-2 items-center">
              Download Whitepapers Now <ArrowUpRight className="text-primary" />
            </Button>
            <div className="flex gap-10 bg-white/5 w-fit py-5 rounded-lg px-10 items-center justify-between border">
              <div>
                <p className="text-neutral-500">Bownloaded By</p>
                <p>10k + Users</p>
              </div>
              <div className="flex ">
                {avatars.map((avatar, index) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className={`${index !== 0 && "-ml-2"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="px-10 space-y-10 py-20">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:items-center lg:justify-between">
              <p className="text-nowrap text-xl">Topics Coverage</p>
              <p className="text-neutral-500">
                Whitepapers cover quantum computing (20%), AI ethics (15%),
                space mining prospects (20%), AI in healthcare (15%), and
                renewable energy strategies (30%).
              </p>
            </div>
            <Image
              src={"/images/home-image-2.svg"}
              alt="Image"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="flex flex-col md:flex-row gap-10">
              <div className="bg-white/5 md:w-fit py-5 rounded-lg px-10 border text-nowrap w-full">
                <p className="text-neutral-500">Total Whitepapers</p>
                <p>Over 50 Whitepapers</p>
              </div>
              <div className="bg-white/5 py-5 rounded-lg px-10 border flex w-full justify-between items-center">
                <div>
                  <p className="text-neutral-500">Download Formats</p>
                  <p>PDF format for access.</p>
                </div>
                <Button variant={"outline"} className="gap-2">
                  Preview <Eye className="text-primary" />
                </Button>
              </div>
            </div>
            <div className="bg-white/5 py-5 rounded-lg px-10 border">
              <p className="text-neutral-500">Average Author Expertise</p>
              <p>
                Whitepapers are authored by subject matter experts with an
                average of 20 years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Header
        header="What Our Readers Say"
        subheader="Real Words from Real Readers"
        button={
          <Button className="bg-black text-white gap-2 w-full sm:w-fit">
            View All Testimonials <ArrowUpRight className="text-primary" />
          </Button>
        }
      />
      <section className="px-10 py-10 items-center justify-center flex flex-col gap-10">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Testimonials
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            location="Kalutara, Sri Lanka"
            testimonials="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
            stars={4}
          />
          <Testimonials
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            location="Kalutara, Sri Lanka"
            testimonials="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
            stars={4}
          />
          <Testimonials
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            location="Kalutara, Sri Lanka"
            testimonials="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
            stars={4}
          />
        </div>
        <div className="max-w-6xl hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Testimonials
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            location="Kalutara, Sri Lanka"
            testimonials="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
            stars={4}
            containerClasses="pr-10"
          />
          <Testimonials
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            location="Kalutara, Sri Lanka"
            testimonials="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
            stars={4}
            containerClasses="px-10"
          />
          <Testimonials
            fullname="Tharusha Perera"
            image="/images/avatar.svg"
            location="Kalutara, Sri Lanka"
            testimonials="The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
            stars={4}
            containerClasses="pl-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
