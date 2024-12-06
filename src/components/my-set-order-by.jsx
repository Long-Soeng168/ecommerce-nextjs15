"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Button } from "./ui/button";

const MySetOrderBy = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      if (!searchParams.get("orderDir")) {
        params.set("orderDir", "desc");
      }
      params.set("orderBy", value);
      params.set("page", 1);
    } else {
      params.delete("orderBy");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSelectDir = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("orderDir", value);
      params.set("page", 1);
    } else {
      params.delete("orderDir");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex items-center gap-2">
      <span>Order by</span>
      <Select
        onValueChange={(value) => handleSelect(value)}
        defaultValue={searchParams.get("orderBy")?.toString()}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title">Title</SelectItem>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="discount">Discount</SelectItem>
          <SelectItem value="created_at">Post Date</SelectItem>
          <SelectItem value="year">Published Year</SelectItem>
        </SelectContent>
      </Select>
      <Select
        key={searchParams.get("orderDir")?.toString()}
        onValueChange={(value) => handleSelectDir(value)}
        defaultValue={searchParams.get("orderDir")?.toString()}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder="Set Direction" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">From A to Z</SelectItem>
          <SelectItem value="desc">From Z to A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MySetOrderBy;
