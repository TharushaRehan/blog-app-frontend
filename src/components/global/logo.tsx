import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image src="/logo/logo_text.svg" alt="Logo" width={160} height={20} />
      {/* <div className="hidden md:block">
        <Image src="/logo/logo_text.svg" alt="Logo" width={160} height={20} />
      </div>

      <div className="block md:hidden">
        <Image src="/logo/logo.svg" alt="Logo" width={60} height={20} />
      </div> */}
    </>
  );
};

export default Logo;
