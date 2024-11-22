import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Filter, LayoutListIcon, LucideLayoutGrid, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/my-product-card";
import { MyHomeSidebar } from "@/components/my-home-sidebar";
import { getBooks } from "@/services/books-services";
import { getCategories } from "@/services/categories-services";

const Page = async () => {
  const resultBooks = await getBooks();
  const books = resultBooks?.data;

  const categories = await getCategories({ withSub: 1 });

  return (
    <div className="flex">
      {/* Left Side */}
      <div className="hidden lg:flex">{leftSide()}</div>
      {/* Right Side */}
      <div className="flex-1 p-4 space-y-2">
        {/* Start Bread */}
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
        {/* End Bread */}

        {/* Start books Header */}
        <div className="flex flex-wrap justify-end gap-2">
          {/* Start Search */}
          {/* <div className="flex flex-1 border rounded-lg shadow-sm">
            <Input
              autoFocus
              className="border-none shadow-none min-w-40 focus-visible:ring-0"
              placeholder="Search..."
            />
            <Button variant="gosh" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Search</span>
            </Button>
          </div> */}
          {/* End Search */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By : Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Show : 20 per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8 per page</SelectItem>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="32">32 per page</SelectItem>
                <SelectItem value="40">40 per page</SelectItem>
                <SelectItem value="52">52 per page</SelectItem>
                <SelectItem value="100">100 per page</SelectItem>
              </SelectContent>
            </Select>
            <span className="flex gap-2">
              <Button variant="outline" size="icon">
                <LucideLayoutGrid />
              </Button>
              <Button variant="outline" size="icon">
                <LayoutListIcon />
              </Button>
            </span>

            {/* Filter */}
            <span className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    Filter
                    <Filter />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="overflow-y-scroll">
                  <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                  </SheetHeader>
                  {leftSide()}
                </SheetContent>
              </Sheet>
            </span>
          </div>
        </div>
        {/* End books Header */}

        {/* Start books List */}
        <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {books?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {/* End books List */}

        {/* Start Pagination */}
        <div className="flex flex-wrap items-center justify-between pt-4">
          <p className="w-40">Items 1-35 of 61</p>
          <Pagination className="flex justify-end flex-1">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        {/* End Pagination */}
      </div>
    </div>
  );

  function leftSide() {
    return (
      <div className="flex flex-col pt-2">
        <MyHomeSidebar categories={categories} />
        {/* Price */}
        <div className="p-2 mt-4 border-t">
          <p className="p-2 text-xs text-sidebar-foreground">Price</p>
          <div>
            <p className="text-sm">From</p>
            <Input placeholder="From" />
          </div>
          <div>
            <p className="mt-2 text-sm">To</p>
            <Input placeholder="To" />
          </div>
        </div>

        {/* Date */}
        <div className="p-2 mt-4 border-t">
          <p className="p-2 text-xs text-sidebar-foreground">Published Date</p>
          <div>
            <p className="text-sm">From</p>
            <Input placeholder="From" type="date" />
          </div>
          <div>
            <p className="mt-2 text-sm">To</p>
            <Input placeholder="To" type="date" />
          </div>
        </div>

        <Button className="mt-4">Apply Filter</Button>
      </div>
    );
  }
};

export default Page;
