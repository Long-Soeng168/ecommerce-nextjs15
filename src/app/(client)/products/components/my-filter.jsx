"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const MyFilter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");

  const handleSetFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set("priceFrom", priceFrom);
    params.set("priceTo", priceTo);
    params.set("yearFrom", yearFrom);
    params.set("yearTo", yearTo);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div className="p-2 mt-4 border-t">
        <p className="text-sm font-bold text-primary">Price ($)</p>
        <div className="flex items-center gap-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">From</p>
            <Input
              className="border border-primary"
              type="number"
              onChange={(e) => {
                setPriceFrom(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">To</p>
            <Input
              type="number"
              className="border border-primary"
              onChange={(e) => {
                setPriceTo(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="p-2 mt-4">
        <p className="text-sm font-bold text-primary">Published Year</p>
        <div className="flex items-center gap-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">From</p>
            <Input
              className="border border-primary"
              type="number"
              onChange={(e) => {
                setYearFrom(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">To</p>
            <Input
              className="border border-primary"
              type="number"
              onChange={(e) => {
                setYearTo(e.target.value);
              }}
            />
          </div>
        </div>
        <Button onClick={() => handleSetFilter()} className="w-full mt-4">
          Apply Filter
        </Button>
      </div>
    </div>
  );
};

export default MyFilter;
