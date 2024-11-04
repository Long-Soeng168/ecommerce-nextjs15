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

const products = [
  {
    id: 1,
    title: "Premium High-Quality",
    description:
      "Experience superior sound quality and block out distractions with these state-of-the-art wireless earbuds.",
    price: "$59999999999.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 2,
    title:
      "Sleek and Stylish Smartwatch for Comprehensive Fitness Tracking and Instant Notifications",
    description:
      "Stay connected and monitor your health metrics effortlessly with this elegant smartwatch designed for modern lifestyles.",
    price: "$149.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 3,
    title:
      "Compact and Portable Bluetooth Speaker for Exceptional Sound Quality Anywhere You Go",
    description:
      "Take your music with you on all your adventures with this lightweight Bluetooth speaker that delivers powerful sound.",
    price: "$79.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 4,
    title:
      "State-of-the-Art 4K Ultra HD TV with Smart Features and Stunning Picture Quality",
    description:
      "Transform your living room into a cinematic experience with this impressive 4K Ultra HD TV, featuring the latest smart technology.",
    price: "$499.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 5,
    title:
      "High-Precision Gaming Mouse Designed for Competitive Play with Customizable Features",
    description:
      "Elevate your gaming performance with this ergonomic gaming mouse, engineered for speed and accuracy.",
    price: "$39.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 6,
    title:
      "Versatile 2-in-1 Laptop with Touchscreen and Ultra-Fast Performance",
    description:
      "Experience the best of both worlds with this powerful 2-in-1 laptop that combines productivity and entertainment.",
    price: "$899.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 7,
    title: "All-Natural Organic Skincare Set for Radiant and Healthy Skin",
    description:
      "Pamper your skin with this luxurious skincare set made from 100% organic ingredients for a natural glow.",
    price: "$89.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 8,
    title:
      "High-Quality DSLR Camera for Professional Photography and Videography",
    description:
      "Capture stunning images and videos with this high-performance DSLR camera featuring advanced settings and features.",
    price: "$1,299.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 9,
    title: "Durable and Lightweight Hiking Backpack with Multiple Compartments",
    description:
      "Embark on your next adventure with this rugged hiking backpack, designed for comfort and convenience on the trail.",
    price: "$59.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
  {
    id: 10,
    title:
      "Elegant Bluetooth Headphones with Superior Sound Quality and Long Battery Life",
    description:
      "Enjoy your music wirelessly with these stylish Bluetooth headphones that provide exceptional audio performance.",
    price: "$79.99",
    image: "/images/products/book4.png", // Your specified image URL
  },
];

const Page = () => {
  return (
    <div className="flex">
      {/* Left Side */}
      <div className="hidden lg:flex">{leftSide()}</div>
      {/* Right Side */}
      <div className="flex-1 p-4 space-y-2">
        {/* Start Bread */}
        <Breadcrumb>
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
        </Breadcrumb>
        {/* End Bread */}

        {/* Start Products Header */}
        <div className="flex flex-wrap justify-end gap-2">
          {/* Start Search */}
          <div className="flex flex-1 border rounded-lg shadow-sm">
            <Input
              autoFocus
              className="border-none shadow-none min-w-40 focus-visible:ring-0"
              placeholder="Search..."
            />
            <Button variant="gosh" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Search</span>
            </Button>
          </div>
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
                <SheetContent side="left" className='overflow-y-scroll'>
                  <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                  </SheetHeader>
                  {leftSide()}
                </SheetContent>
              </Sheet>
            </span>
          </div>
        </div>
        {/* End Products Header */}

        {/* Start Products List */}
        <div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {/* End Products List */}

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
      <div className="flex flex-col">
        <MyHomeSidebar />
        {/* Price */}
        <div className="p-2 border-t">
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

        <Button className='mt-4'>
          Apply Filter
        </Button>
      </div>
    );
  }
};

export default Page;
