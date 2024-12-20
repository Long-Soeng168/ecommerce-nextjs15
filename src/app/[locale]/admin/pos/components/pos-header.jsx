import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignLeft,
  Bell,
  Hand,
  Layout,
  ListCheck,
  ListChecksIcon,
  ListEnd,
  LogOut,
  PanelTop,
  Search,
  ShoppingCart,
} from "lucide-react";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Detail from "@/app/[locale]/admin/pos/components/Detail";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import POSHeaderMenu from "./pos-header-menu";
import POSSearch from "./pos-search";

const POSHeader = () => {
  return (
    <>
      <header>
        {/* Logo */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2">
          <div className="flex items-center justify-center flex-1 order-2 gap-4 ">
            <POSHeaderMenu className="hidden md:block" />

            {/* Search Bar */}
            <div className="flex-1">
              <form className="relative w-full ">
                <div className="flex items-stretch bg-white border-[0.5px] border-primary rounded-lg">
                  <Select defaultValue="products">
                    <SelectTrigger className="w-auto h-full py-3 font-semibold border-none rounded-lg outline-none focus:ring-0">
                      <SelectValue placeholder="Item Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="products">Products</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                    </SelectContent>
                  </Select>
                 <POSSearch />
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-2 md:w-auto md:order-3">
            <POSHeaderMenu className="lg:hidden" />
            <div className="flex items-center gap-2">
              <Button variant="outline" className="relative h-11 border-[0.5px]">
                <Link href="#" className="flex items-center gap-1">
                  <ListEnd className="text-primary" />
                  <span>Holds</span>
                </Link>
                <span className="absolute px-1.5 bg-yellow-400 rounded-full right-0.5 -top-2">
                  2
                </span>
              </Button>

              <section className="lg:hidden">
                <Sheet  modal={false}>
                  <SheetTrigger asChild>
                    <Button className="flex items-center border-[0.5px] h-11">
                      <ListChecksIcon />
                      <span>Orders</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full px-0 sm:max-w-auto">
                    <SheetTitle className="hidden" />
                    <SheetDescription className="hidden" />
                    <Detail />
                  </SheetContent>
                </Sheet>
              </section>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default POSHeader;
