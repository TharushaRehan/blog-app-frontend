"use client";

import Header from "@/components/global/header";
import ResourceCard from "@/components/global/resource-card";
import ResourceContainer from "@/components/global/resource-container";
import { resources, resourcesCard } from "@/constants";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const tabs = ["Whitepapers", "Ebooks", "Reports"];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <section className="px-10 w-full h-[300px] flex flex-col gap-5 items-start justify-center border-b">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">
          Unlock a World of Knowledge
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          Dive deep into the AI universe with our collection of insightful
          podcasts. Explore the latest trends, breakthroughs, and discussions on
          artificial intelligence. <br /> Whether you&apos;re an enthusiast or a
          professional, our AI podcasts offer a gateway to knowledge and
          innovation..
        </p>
      </section>
      <section className="px-10 grid grid-cols-2 lg:grid-cols-4 place-items-center gap-10 lg:gap-0 py-10 lg:py-20">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
            300 <Plus className="text-primary size-8 md:size-16 lg:size-20" />
          </p>
          <p className="text-neutral-500 text-sm md:text-base text-center">
            Resources Avalailable
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
            12k <Plus className="text-primary size-8 md:size-16 lg:size-20" />
          </p>
          <p className="text-neutral-500 text-sm md:text-base text-center">
            Total Downloads
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
            10k <Plus className="text-primary size-8 md:size-16 lg:size-20" />
          </p>
          <p className="text-neutral-500 text-sm md:text-base text-center">
            Active Users
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl sm:text-4xl md:text-7xl flex gap-2 items-center">
            100 <Plus className="text-primary size-8 md:size-16 lg:size-20" />
          </p>
          <p className="text-neutral-500 text-sm md:text-base text-center">
            Countries Accesses Our Content
          </p>
        </div>
      </section>
      <Header
        header="Dive into the Details"
        subheader="In-Depth Reports and Analysis"
        button={
          <div className="flex justify-between gap-5 bg-black p-2 border rounded-xl">
            {tabs.map((tab) => (
              <p
                key={tab}
                className={`border rounded-lg text-center p-5 cursor-pointer transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white/10"
                    : "text-neutral-500 hover:bg-white/10 hover:text-neutral-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </p>
            ))}
          </div>
        }
      />
      <section className="divide-y px-10">
        {resources.map((resource) => (
          <ResourceContainer
            key={resource.title}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
            resourceImage={resource.resourceImage}
            resourceTitle={resource.resourceTitle}
            resourcedescription={resource.resourceDescription}
            publicationDate={resource.publicationDate}
            category={resource.category}
            author={resource.author}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 border-t divide-y lg:divide-x lg:divide-y-0">
        {resourcesCard.map((card) => (
          <div className="py-10 lg:py-20" key={card.title}>
            <ResourceCard
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResourcesPage;
