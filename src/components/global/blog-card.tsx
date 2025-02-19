import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Heart, MessageCircle, Send, Share } from "lucide-react";
import Image from "next/image";

interface Props {
  fullname: string;
  image: string;
  occupation: string;
  uploadDate: string;
  blogTitle: string;
  blogContent: string;
  likes: number;
  comments: number;
  shares: number;
}

const BlogCard = ({
  fullname,
  image,
  occupation,
  blogTitle,
  blogContent,
  uploadDate,
  likes,
  comments,
  shares,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between border-b pb-10 gap-5 md:gap-0">
      <div className="flex gap-5 items-center self-start flex-wrap">
        <Image
          src={image}
          alt="Icon"
          height={70}
          width={70}
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
        <div className="space-y-1">
          <p className="text-base md:text-lg font-bold">{fullname}</p>
          <p className="text-neutral-500 text-sm">{occupation}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-neutral-500">{uploadDate}</p>
        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-bold">{blogTitle}</p>
          <p className="text-neutral-500 text-base md:text-lg">{blogContent}</p>
        </div>
        <div className="flex gap-5">
          <div className="text-neutral-500 flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
            <Heart size={20} />
            <span>{likes}</span>
          </div>
          <div className="text-neutral-500 flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
            <MessageCircle size={20} />
            <span>{comments}</span>
          </div>
          <div className="text-neutral-500 flex items-center gap-2 border rounded-3xl bg-white/10 px-3 py-1">
            <Send size={20} />
            <span>{shares}</span>
          </div>
        </div>
      </div>
      <Button
        variant={"outline"}
        className="gap-2 md:self-center md:relative absolute self-end"
      >
        View Blog <ArrowUpRight className="text-primary" />
      </Button>
    </div>
  );
};

export default BlogCard;
