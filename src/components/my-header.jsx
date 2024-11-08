import Image from "next/image";
import React from "react";
import { MyHeaderNav } from "./my-header-nav";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Button } from "./ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MyHeader = () => {
  return (
    <>
      <div className="flex flex-wrap lg:gap-10 lg:items-center">
        {/* Start Logo */}
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center">
            <Image
              className="object-contain w-16 p-2 aspect-square"
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Logo Image"
            />
            <p className="text-2xl font-bold max-w-26">LLong</p>
          </Link>
          {/* <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-16" />
            <span className="sr-only">Toggle Menu</span>
          </Button> */}
        </div>

        {/* Start Nav Bar */}
        <div className="justify-center flex-1 hidden lg:flex ">
          <MyHeaderNav />
        </div>

        {/* Start Action  */}
        <div className="flex items-center justify-end flex-1 w-full gap-2">
          {/* <div className="flex flex-1 border rounded-lg shadow-sm">
            <Input
              className="border-none shadow-none focus-visible:ring-0"
              placeholder="Search..."
            />
            <Button variant="gosh" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Search</span>
            </Button>
          </div> */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Search className="h-[1.2rem] w-[1.2rem] " />
                <span className="sr-only">Search</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-1 border rounded-lg shadow-sm border-primary">
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
            </SheetContent>
          </Sheet>

          <Button variant="outline" size="icon">
            <Link href="/cart">
              <ShoppingCart className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          <ModeToggle />
          <LanguageToggle />
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem] " />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MyHeader;
