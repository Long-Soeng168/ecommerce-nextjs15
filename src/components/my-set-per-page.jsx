"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const MySetPerPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("perPage", value);
      params.set("page", 1);
    } else {
      params.delete("perPage");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Select
        onValueChange={(value) => handleSelect(value)}
        defaultValue={searchParams.get("perPage")?.toString() || '10'}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Show : per page`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10 per page</SelectItem>
          <SelectItem value="20">20 per page</SelectItem>
          <SelectItem value="30">30 per page</SelectItem>
          <SelectItem value="40">40 per page</SelectItem>
          <SelectItem value="50">50 per page</SelectItem>
          <SelectItem value="100">100 per page</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MySetPerPage;
