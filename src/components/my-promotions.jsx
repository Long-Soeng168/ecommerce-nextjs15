import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const MyPromotions = () => {
  const books = [
    {
      title: "Lords Of The Rings",
      image: "/images/books/book3.png",
      link: "#",
    },
    {
      title: "Lords Of The Rings",
      image: "/images/books/book2.png",
      link: "#",
    },
    {
      title: "The Scarlet Pimpernel Emma Orexy",
      image: "/images/books/book1.png",
      link: "#",
    },
  ];

  return (
    <div className="grid gap-4 overflow-hidden lg:grid-cols-3">
      {/* Left Column (Book Promotion) */}
      <div className="w-full col-span-1 p-4 bg-green-100 dark:bg-accent">
        <p className="text-xs sm:text-sm">Flat 30% Off On Story Book</p>
        <h2 className="mt-2 text-lg font-semibold sm:text-xl">
          The Most Popular Book By Vive Viajando
        </h2>
        <Link
          className="mt-8 text-xl text-indigo-500 uppercase hover:underline"
          href="#"
        >
          Shop Now
        </Link>
        <div className="flex items-center justify-center">
          <Image
            width={300}
            height={300}
            src="/images/books/book4.png"
            alt="Vive Viajando Book"
            className="object-contain w-full p-4 mt-4 aspect-square"
          />
        </div>
      </div>

      {/* Right Column (Other Books) */}
      <div className="grid col-span-1 gap-4 lg:grid-cols-2 lg:col-span-2">
        {books.map((book, index) => {
          const backgroundClass =
            index === 2
              ? "bg-yellow-100"
              : index % 2 === 0
              ? "bg-blue-100"
              : "bg-pink-100";
          const isWideClass = index === 2 ? "sm:col-span-2" : "";

          return (
            <div
              key={index}
              className={`grid grid-cols-2 gap-2 items-center p-4 ${backgroundClass} ${isWideClass} flex-row dark:bg-accent`}
            >
              <div>
                <h2 className="mt-2 text-lg font-semibold sm:text-xl">
                  {book.title}
                </h2>
                <Link
                  className="text-xl text-indigo-500 uppercase hover:underline"
                  href={book.link}
                >
                  Shop Now
                </Link>
              </div>
              <div className="flex items-center justify-center flex-1">
                <Image
                  width={150}
                  height={150}
                  src={book.image}
                  alt={book.title}
                  className="object-contain min-w-40"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPromotions;
