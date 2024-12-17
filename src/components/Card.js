import React from "react";
import Image from "next/image";

export default function Card({ image, title, price, discount, id }) {
  return (
    <button className="flex flex-col justify-start h-full p-1 bg-white border-2 border-white rounded-lg shadow hover:border-primary dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <Image
          className="rounded-md border-[0.5px] aspect-[1/1] object-cover"
          src={image}
          alt=""
          width={300}
          height={300}
          objectFit="center" 
        />
        {discount != 0 && discount != null && (
          <span className="absolute px-1.5 font-bold text-sm rounded-sm text-white bottom-1.5 left-1.5 bg-real_primary/80">
            - {discount}%
          </span>
        )}
      </div>
      <div className="mt-1">
        <h5 className="text-xs text-gray-900 text-start line-clamp-2 dark:text-white">{title}</h5>
        <p className="text-xs text-start">Code: P-0123</p>
      </div>
      <div className="w-full text-right text-primary dark:text-gray-400">
        <div className="flex flex-col items-start">
          <p className="text-gray-600 line-through ">$ {price}</p>
          <p className="text-red-600">$ {price - price * (discount / 100)} $</p>
        </div>
      </div>
    </button>
  );
}
