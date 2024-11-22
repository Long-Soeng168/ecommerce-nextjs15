// src/ProductCard.js
import React from "react";
import { Button } from "./button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col items-stretch justify-between w-full h-full transition-all duration-500 rounded-lg hover:scale-95"
    >
      <div>
        <div className="relative">
          <Image
            width={600}
            height={600}
            className="object-cover w-full rounded-md aspect-[6/9]"
            src={process.env.IMAGE_BOOK_URL + product.image}
            alt={product.title}
          />
          {!product.discount && (
            <span className="absolute px-1.5 font-bold text-lg rounded-sm text-white bottom-1.5 left-1.5 bg-primary/80">
              - 20%
            </span>
          )}
        </div>
        <div className="flex flex-col justify-between p-2 mt-2 mb-2 lg:mb-0 lg:items-center lg:flex-row">
          {!product.discount ? (
            <p className="overflow-hidden text-lg text-gray-400 text-ellipsis">
              <span className="mr-2 line-through">{product.price} ៛</span>
              <span className="text-red-500">8000 ៛</span>
            </p>
          ) : (
            <p className="text-lg font-bold text-red-500 max-w-[12ch] overflow-hidden text-ellipsis">
              {product.price} ៛
            </p>
          )}

          {/* <span className="flex">
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-gray-400" />
          </span> */}
        </div>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <h3 className="text-md text-start text-foreground line-clamp-2">
                {product.title}
              </h3>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="mr-1.5 border shadow-sm w-60 bg-popover text-primary"
            >
              <p className="text-[16px] leading-5">{product.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <p className="mb-2 text-background-foreground line-clamp-2">{product.description}</p> */}
      </div>

      {/* <div className="flex justify-between">
        <Button variant="outline" size="icon" className="mt-2">
          <Heart />
        </Button>
        <Button variant="default" className="mt-2">
          <ShoppingCart />
          Add to cart
        </Button>
      </div> */}
    </Link>
  );
};

export default ProductCard;
