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
    <div>
      <div className="flex flex-wrap pb-4 lg:gap-10 lg:items-center lg:pb-0">
        {/* Start Logo */}
        <div className="flex items-center justify-between w-full gap-2 lg:w-auto">
          <Link href="/" className="flex items-center">
            <Image
              className="object-contain w-16 p-2 aspect-square"
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Logo Image"
            />
            <p className="text-2xl font-bold max-w-26 text-primary-foreground dark:text-white">
              LLong
            </p>
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <LanguageToggle />
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Start Action  */}
        <div className="flex items-center justify-end flex-1 w-full gap-2">
          <div className="flex flex-1 bg-white border rounded-lg shadow-sm dark:text-primary border-primary">
            <Input
              autoFocus
              className="border-none shadow-none dark:text-black dark:placeholder-black min-w-40 focus-visible:ring-0"
              placeholder="Search..."
            />
            <Button variant="gosh" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] dark:text-black" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <Link href="/cart">
              <ShoppingCart className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex-wrap hidden py-4 lg:flex lg:items-center">
        {/* Start Logo */}

        {/* Start Nav Bar */}
        <div className="text-primary-foreground dark:text-white">
          <MyHeaderNav />
        </div>

        {/* Start Action  */}
        <div className="flex items-center justify-end flex-1 w-full gap-2">
          <ModeToggle />
          <LanguageToggle />
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem] " />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
