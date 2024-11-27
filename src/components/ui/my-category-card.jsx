import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyCategoryCard = ({ category }) => {
  return (
    <>
      <Link href="/products">
        <div className="relative flex items-center h-full p-4 overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg cursor-pointer group hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <span className="absolute bottom-0 left-0 w-full h-48 mb-0 ml-0 transition-all duration-300 ease-out -translate-x-full translate-y-full bg-indigo-500 rounded group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <div className="z-50 p-1 mr-4 text-4xl bg-white rounded-md dark:bg-gray-200">
            <Image
              className={`aspect-square object-contain`}
              width={40}
              height={40}
              src={process.env.IMAGE_CATE_URL + category.image}
              alt=""
            />
          </div>
          <div className="z-50">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white dark:text-gray-100">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
              {category.books_count ? category.books_count + "+ Books" : ""}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyCategoryCard;
