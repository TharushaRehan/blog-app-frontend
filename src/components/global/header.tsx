import React from "react";

interface Props {
  header: string;
  subheader: string;
  button?: React.ReactNode;
}

const Header = ({ header, subheader, button }: Props) => {
  return (
    <div className="bg-white/5 px-10 py-10 md:py-20 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-0">
      <div className="space-y-4">
        <p className="bg-white/10 w-fit px-5 py-2 rounded-lg text-sm md:text-base">
          {header}
        </p>
        <p className="text-4xl md:text-5xl max-w-6xl">{subheader}</p>
      </div>
      {button}
    </div>
  );
};

export default Header;
