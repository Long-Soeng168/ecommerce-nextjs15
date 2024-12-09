import { getNewArrivalBooks } from "@/services/books-services";
import React from "react";
import MyProductHeader from "../my-product-header";
import MyProductsList from "../my-product-list";

const NewArrivals = async () => {
  const resultNewBooks = await getNewArrivalBooks();
  const firstNewArrivalBooks = resultNewBooks?.first_set || [];
  const secondNewArrivalBooks = resultNewBooks?.second_set || [];
  return (
    <>
      {(firstNewArrivalBooks?.length > 0 ||
        secondNewArrivalBooks?.length > 0) && (
        <>
          <MyProductHeader title="New Arrivals" />
          <div className="flex flex-col gap-4 mb-20">
            <MyProductsList books={firstNewArrivalBooks} />
            <MyProductsList books={secondNewArrivalBooks} />
          </div>
        </>
      )}
    </>
  );
};

export default NewArrivals;
