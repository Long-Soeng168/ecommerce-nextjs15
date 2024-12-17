import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  {
    id: 1,
    text: "Brew Equipment",
    icon: "/images/pos/product2.jpg",
  },
  {
    id: 2,
    text: "Coffee",
    icon: "/images/pos/coffee.png",
  },
  {
    id: 3,
    text: "Espresso",
    icon: "/images/pos/drink.png",
  },
  {
    id: 4,
    text: "Instant + RTD",
    icon: "/images/pos/product2.jpg",
  },
  {
    id: 5,
    text: "Ceramics",
    icon: "/images/pos/coffee.png",
  },
  {
    id: 6,
    text: "Brew Equipment",
    icon: "/images/pos/drink.png",
  },
  {
    id: 7,
    text: "Coffee",
    icon: "/images/pos/product2.jpg",
  },
  {
    id: 8,
    text: "Espresso",
    icon: "/images/pos/product2.jpg",
  },
  {
    id: 9,
    text: "Instant + RTD",
    icon: "/images/pos/product2.jpg",
  },
  {
    id: 10,
    text: "Instant + RTD",
    icon: "/images/pos/product2.jpg",
  },
  {
    id: 11,
    text: "Ceramics",
    icon: "/images/pos/coffee.png",
  },
];

const POSFilter = () => {
  return (
    <div className="bg-primary/10">
      <ScrollArea className="w-full px-2 pt-2 mt-4 ">
        <div className="flex pb-2 space-x-2 w-max">
          <Button>
            <p>All Categories</p>
          </Button>
          {categories.map((category) => (
            <Button key={category.id} variant="outline">
              {category.icon && (
                <Image src={category.icon} width={20} height={20} alt="" />
              )}
              <p>{category.text}</p>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className='pt-1 text-primary' />
      </ScrollArea>
      <ScrollArea className="w-full px-2 mt-2 ">
        <div className="flex pb-2 space-x-2 w-max">
          <Button>
            <p>All Brands</p>
          </Button>
          {categories.map((category) => (
            <Button key={category.id} variant="outline">
              {category.icon && (
                <Image src={category.icon} width={20} height={20} alt="" />
              )}
              <p>{category.text}</p>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className='pt-1 text-primary' />
      </ScrollArea>
    </div>
  );
};

export default POSFilter;
