// src/ProductCard.js
import React from "react";
import { Button } from "./button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="flex flex-col items-stretch justify-between h-full p-2 border rounded-lg shadow-sm">
      <div>
        <Image
          width={600}
          height={600}
          className="object-cover w-full rounded-md aspect-square"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col justify-between my-2 lg:items-center lg:flex-row">
          <p className="text-2xl font-bold text-red-500 max-w-[12ch] overflow-hidden text-ellipsis">{product.price}</p>
          <span className="flex">
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 text-gray-400" />
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">{product.title}</h3>
        <p className="mb-2 text-background-foreground line-clamp-2">{product.description}</p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" size="icon" className="mt-2">
          <Heart />
        </Button>
        <Button variant="default" className="mt-2">
          <ShoppingCart />
          Add to cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
