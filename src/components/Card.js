"use client";
import React, { useState } from "react";
import Image from "next/image";
import LottieAnimation from "./ui/lottie-animation";
import animationData from "/public/images/animations/success-animation2.json";

export default function Card({ image, title, price, discount, id }) {
  const [isSelect, setIsSelect] = useState(false);
  const [isPlayAnimation, setIsPlayAnimation] = useState(false);
  const handleSelect = () => {
    setIsSelect(true);
    setIsPlayAnimation(true);
    setTimeout(() => {
      setIsPlayAnimation(false);
    }, 2500);
  };
  return (
    <button
      onClick={() => handleSelect()}
      className={`flex flex-col justify-start hover:scale-105 transition-all duration-300 h-full p-1 bg-white border-2  rounded-lg shadow hover:border-primary dark:bg-gray-800 dark:border-gray-700 ${
        isSelect ? "border-primary" : "border-white"
      } `}
    >
      <div className="relative w-full">
        <Image
          className="rounded-md border-[0.5px] w-full h-full aspect-[1/1] object-cover"
          src={`https://admin.thnal.org/assets/images/isbn/thumb/${image}`}
          alt=""
          width={100}
          height={100}
        />
        {discount != 0 && discount != null && (
          <span className="absolute px-1.5 font-bold text-sm rounded-sm text-white bottom-1.5 left-1.5 bg-real_primary/80">
            - {discount}%
          </span>
        )}
        {isPlayAnimation && (
          <span className="absolute -top-3 -right-3">
            <LottieAnimation
              animationData={animationData}
              className="w-[50px]"
            />
          </span>
        )}
      </div>
      <div className="mt-1">
        <h5 className="text-xs text-gray-900 text-start line-clamp-2 dark:text-white">
          {title}
        </h5>
        {/* <p className="text-xs text-start">Code: P-0123</p> */}
      </div>
      <div className="w-full text-right text-primary dark:text-gray-400">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <p className="text-xs text-gray-600 line-through">$ {price}</p>
          <p className="text-red-600">$ {price - price * (discount / 100)} $</p>
        </div>
      </div>
    </button>
  );
}
