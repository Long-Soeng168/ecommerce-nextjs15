import React, { Suspense } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MyHomeSidebar } from "@/components/my-home-sidebar";
import { getCategories } from "@/services/categories-services";
import MySearch from "@/components/ui/my-search";
import DataList from "./components/data-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import MySetPerPage from "@/components/my-set-per-page";
import MySetOrderBy from "@/components/my-set-order-by";
import LoadingDataList from "./components/loading-data-list";
import MyFilter from "./components/my-filter";
import MySelectFilter from "./components/my-select-filter";
import MyLoadingAnimation from "@/components/ui/my-loading-animation";

const Page = async (props) => {
  const categories = await getCategories({
    withSub: 1,
    orderBy: "name",
    orderDir: "asc",
  });

  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = searchParams?.page || '1';
  const perPage = searchParams?.perPage || '20';
  const categoryId = searchParams?.categoryId || "";
  const subCategoryId = searchParams?.subCategoryId || "";
  const orderBy = searchParams?.orderBy || "";
  const orderDir = searchParams?.orderDir || "";
  const priceFrom = searchParams?.priceFrom || "";
  const priceTo = searchParams?.priceTo || "";
  const yearFrom = searchParams?.yearFrom || "";
  const yearTo = searchParams?.yearTo || "";
  const authorId = searchParams?.authorId || "";
  const publisherId = searchParams?.publisherId || "";

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
          <div className="w-full h-full">
            <MySearch placeholder="Search blogs..." />
          </div>

          {/* End Search */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            <MySetOrderBy />
            <MySetPerPage />
            {/* <span className="flex gap-2">
              <Button variant="outline" size="icon">
                <LucideLayoutGrid />
              </Button>
              <Button variant="outline" size="icon">
                <LayoutListIcon />
              </Button>
            </span> */}

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
        <Suspense
          key={
            ' ' +
            search +
            currentPage +
            perPage +
            categoryId +
            subCategoryId +
            orderBy +
            orderDir +
            priceFrom +
            priceTo +
            yearFrom +
            yearTo +
            authorId +
            publisherId
          }
          fallback={<LoadingDataList />}
        >
          <DataList
            currentPage={currentPage}
            perPage={perPage}
            search={search}
            categoryId={categoryId}
            subCategoryId={subCategoryId}
            orderBy={orderBy}
            orderDir={orderDir}
            priceFrom={priceFrom}
            priceTo={priceTo}
            yearFrom={yearFrom}
            yearTo={yearTo}
            authorId={authorId}
            publisherId={publisherId}
          />
        </Suspense>
      </div>
    </div>
  );

  function leftSide() {
    return (
      <div className="flex flex-col w-64 pt-2 mb-10">
        <ScrollArea className="max-h-[800px] pr-2">
          <MyHomeSidebar
            key={categoryId + subCategoryId}
            categories={categories}
          />
        </ScrollArea>
        <Suspense
          key={authorId + publisherId}
          fallback={<MyLoadingAnimation />}
        >
          <MySelectFilter />
        </Suspense>
        {/* Price */}
        <div key={' ' + priceFrom + priceTo + yearFrom + yearTo}>
          <MyFilter />
        </div>
      </div>
    );
  }
};

export default Page;
