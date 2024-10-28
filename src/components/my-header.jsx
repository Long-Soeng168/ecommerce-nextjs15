import Image from "next/image";
import React from "react";
import { MyHeaderNav } from "./my-header-nav";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Button } from "./ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";

const MyHeader = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-10 lg:items-center lg:flex-row">
        {/* Start Logo */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center">
            <Image
              className="object-contain w-16 p-2 aspect-square"
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Logo Image"
            />
            <p className="text-2xl font-bold max-w-26">LLong</p>
          </div>
          <Button variant="outline" size="icon" className='lg:hidden'>
            <Menu className="h-16" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

        {/* Start Nav Bar */}
        <div className="justify-center flex-1 hidden lg:flex ">
          <MyHeaderNav />
        </div>

        {/* Start Action  */}
        <div className="flex items-center flex-1 w-full gap-2">
          <div className="flex flex-1 border rounded-lg shadow-sm">
            <Input
              className="border-none shadow-none focus-visible:ring-0"
              placeholder="Search..."
            />
            <Button variant="gosh" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] " />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-[1.2rem] w-[1.2rem] " />
            <span className="sr-only">Cart</span>
          </Button>
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </>
  );
};

export default MyHeader;
