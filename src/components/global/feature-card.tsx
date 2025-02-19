import React from "react";

interface Props {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: Props) => {
  return (
    <div className="bg-white/5 rounded-lg w-full md:w-[300px] px-10 py-5 space-y-3 border">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-neutral-500 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
