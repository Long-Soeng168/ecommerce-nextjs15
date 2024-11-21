import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyCategoryCard = ({ category }) => {
  return (
    <>
      <Link href="/products">
        <div className="flex items-center h-full p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="p-1 mr-4 text-4xl bg-white rounded-md dark:bg-gray-200">
            <Image
              className={`aspect-square object-contain`}
              width={40}
              height={40}
              src={process.env.IMAGE_CATE_URL + category.image}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {category.books_count ? category.books_count + '+ Books' : ''}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyCategoryCard;
