import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

interface Props {
  icon: string;
  title: string;
  description: string;
  resourceImage: string;
  resourceTitle: string;
  resourcedescription: string;
  publicationDate: string;
  category: string;
  author: string;
}

const ResourceContainer = ({
  icon,
  title,
  description,
  resourceImage,
  resourceTitle,
  resourcedescription,
  publicationDate,
  category,
  author,
}: Props) => {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:divide-y-0 lg:divide-x">
      <div className="lg:w-1/3 py-10 lg:py-20 flex flex-col gap-5 lg:gap-10 pr-0 lg:pr-10 w-full lg:self-center self-start">
        <Image
          src={icon}
          alt="Icon"
          width={60}
          height={60}
          className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] self-start"
        />
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-neutral-500">{description}</p>
      </div>
      <div className="py-10 lg:py-20">
        <div className="px-0 lg:px-20 space-y-10">
          <Image
            src={resourceImage}
            alt="Image"
            className="w-full h-full"
            width={400}
            height={400}
          />
          <div className="flex items-center justify-between">
            <div className="space-y-2 max-w-[700px]">
              <p className="text-xl lg:text-2xl">{resourceTitle}</p>
              <p className="text-neutral-500 text-sm lg:text-base w-full max-w-[900px]">
                {resourcedescription}
              </p>
            </div>
            <Button className="gap-2">
              Download PDF <ArrowUpRight className="text-black" size={20} />
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between gap-5 sm:gap-10">
            <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
              <p className="text-neutral-500">Publication Date</p>
              <p>{publicationDate}</p>
            </div>
            <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
              <p className="text-neutral-500">Category</p>
              <p>{category}</p>
            </div>
            <div className="border p-5 w-full rounded-2xl bg-neutral-900 space-y-2">
              <p className="text-neutral-500">Author</p>
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceContainer;
