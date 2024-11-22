import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const MyProductHeader = ({ title }) => {
  return (
    <div className="flex justify-between mb-4 border-b-4 border-primary">
      <h2 className="px-12 pt-2 pb-1 text-2xl font-bold rounded-tl-full rounded-br-full text-primary-foreground bg-primary">
        {title}
      </h2>
      <Link
        href="/products"
        className="flex items-center gap-1 text-xl transition-all duration-500 hover:underline text-primary hover:translate-x-4"
      >
        See More
        <ChevronRight />
      </Link>
    </div>
  );
};

export default MyProductHeader;
