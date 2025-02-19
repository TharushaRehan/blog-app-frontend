import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      <div className="bg-black/5">{children}</div>
      <Footer />
    </main>
  );
};

export default PagesLayout;
