"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import ProductCard from "./ui/my-product-card";

export function MyHeaderNav({ categories, categoryMostBook }) {
  const IMAGE_CATE_URL = "https://isbn-nlc.org/assets/images/categories/";
  const IMAGE_BOOK_URL = "https://isbn-nlc.org/assets/images/isbn/";
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            {categories?.length > 0 && (
              <ul className="grid w-[400px] gap-1 p-2 md:w-[600px] md:grid-cols-3 lg:w-[700px] ">
                {categories?.map((category) => (
                  <Link href="/products" key={category.id}>
                    <div className="flex items-center h-full p-2 transition-shadow duration-300 rounded-lg cursor-pointer hover:bg-primary/10 ">
                      <div className="p-1 mr-4 text-4xl bg-white rounded-md dark:bg-gray-200">
                        <Image
                          className={`aspect-square object-contain`}
                          width={40}
                          height={40}
                          src={IMAGE_CATE_URL + category.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-md dark:text-gray-100">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {category.books_count
                            ? category.books_count + "+ Books"
                            : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {categoryMostBook?.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {categoryMostBook?.books?.length > 0 && (
              <ul className="grid p-4 space-x-4 items-start w-[550px] grid-cols-[.65fr_1fr]">
                <li className="row-span-2">
                  <Link
                    href={`/products/${categoryMostBook?.books[0].id}`}
                    className="flex flex-col items-stretch justify-between w-full transition-all duration-500 rounded-lg group"
                  >
                    <div>
                      <div className="relative">
                        <Image
                          width={300}
                          height={300}
                          className="object-cover w-full rounded-md aspect-[6/9]"
                          src={
                            IMAGE_BOOK_URL + categoryMostBook?.books[0].image
                          }
                          alt={categoryMostBook?.books[0].title}
                        />
                        {!categoryMostBook?.books[0].discount && (
                          <span className="absolute px-1.5 font-bold text-lg rounded-sm text-white bottom-1.5 left-1.5 bg-primary/80">
                            - 20%
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col justify-between p-1 lg:items-center lg:flex-row">
                        {!categoryMostBook?.books[0].discount ? (
                          <p className="overflow-hidden text-lg text-gray-400 text-ellipsis">
                            <span className="mr-2 line-through">
                              {categoryMostBook?.books[0].price} ៛
                            </span>
                            <span className="text-red-500">8000 ៛</span>
                          </p>
                        ) : (
                          <p className="text-lg font-bold text-red-500 max-w-[12ch] overflow-hidden text-ellipsis">
                            {categoryMostBook?.books[0].price} ៛
                          </p>
                        )}
                      </div>
                      <h3 className="text-md group-hover:underline text-start text-foreground line-clamp-2">
                        {categoryMostBook?.books[0].title}
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col gap-4 ">
                  {categoryMostBook?.books?.slice(1).map((book) => (
                    <Link
                      key={book.id}
                      href={`/products/${book.id}`}
                      className="group items-start grid grid-cols-[62px,1fr] gap-2"
                      prefetch={false}
                    >
                      <Image
                        width={50}
                        height={50}
                        className="object-cover w-full aspect-book"
                        src={IMAGE_BOOK_URL + book.image}
                        alt={"Image's book"}
                      />

                      <div>
                        <h4 className="font-medium text-md group-hover:underline line-clamp-3">
                          {book.title}
                        </h4>
                        <p className="text-sm text-destructive line-clamp-2">
                          {book.price} ៛
                        </p>
                      </div>
                    </Link>
                  ))}
                </li>
              </ul>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*         
        <NavigationMenuItem>
          <Link href="/profiles/authors" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Authors
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/profiles/publishers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Publishers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
