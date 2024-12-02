"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MyPagination = ({ links }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Retrieve the current page from the searchParams or default to 1
  const currentPage = Number(searchParams.get("page")) || 1;

  // Generate the page URL with updated page parameter
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Check if 'Next' or 'Previous' exists in the pagination
  const hasPreviousPage = currentPage > 1;
  const lastPage = links[links.length - 2]?.label;
  const hasNextPage = currentPage < Number(lastPage);

  const handlePaginationChange = (pageNumber) => {
    const newURL = createPageURL(pageNumber);
    replace(newURL); // Update the URL without reloading the page
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            className={hasPreviousPage ? "text-primary font-bold" : ""}
            onClick={() =>
              hasPreviousPage && handlePaginationChange(currentPage - 1)
            }
          />
        </PaginationItem>

        {/* Page Links */}
        {links
          ?.filter(
            (link) =>
              !link.label.includes("Previous") && !link.label.includes("Next")
          )
          .map((link, index) => {
            const pageNumber = link.label === "..." ? null : Number(link.label);

            return (
              <PaginationItem
                className={`${link.active ? "" : "hidden"}  md:block`}
                key={index}
              >
                <PaginationLink
                  onClick={() =>
                    pageNumber && handlePaginationChange(pageNumber)
                  }
                  dangerouslySetInnerHTML={{ __html: link.label }}
                  className={
                    link.active
                      ? "text-primary border-primary border-2 font-bold"
                      : ""
                  }
                />
              </PaginationItem>
            );
          })}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            className={hasNextPage ? "text-primary font-bold" : ""}
            onClick={() =>
              hasNextPage && handlePaginationChange(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MyPagination;
