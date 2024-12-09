import { getBestSellingBooks } from "@/services/books-services";
import React from "react";
import MyProductHeader from "../my-product-header";
import MyProductsList from "../my-product-list";

const BestSellings = async () => {
  const resultBestSellingBooks = await getBestSellingBooks();
  const firstBestSellingBooks = resultBestSellingBooks?.first_set || [];
  const secondBestSellingBooks = resultBestSellingBooks?.second_set || [];
  return (
    <>
      {(firstBestSellingBooks?.length > 0 ||
        secondBestSellingBooks?.length > 0) && (
        <>
          <MyProductHeader title="Best Selling" />
          <div className="flex flex-col gap-4 mb-20">
            <MyProductsList books={firstBestSellingBooks} />
            <MyProductsList books={secondBestSellingBooks} />
          </div>
        </>
      )}
    </>
  );
};

export default BestSellings;
