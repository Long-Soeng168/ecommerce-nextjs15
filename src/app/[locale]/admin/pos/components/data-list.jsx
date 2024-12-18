import Card from "@/components/Card";
import MyPagination from "@/components/my-pagination";
import { getBooks } from "@/services/books-services";

const DataList = async ({
  currentPage,
  search,
  categoryId,
  subCategoryId,
  perPage,
  orderBy,
  orderDir,
  priceFrom,
  priceTo,
  yearFrom,
  yearTo,
  authorId,
  publisherId,
}) => {
  let results = await getBooks({
    categoryId: categoryId,
    subCategoryId: subCategoryId,
    search: search,
    page: currentPage,
    perPage: perPage,
    orderBy: orderBy,
    orderDir: orderDir,
    priceFrom: priceFrom,
    priceTo: priceTo,
    yearFrom: yearFrom,
    yearTo: yearTo,
    authorId: authorId,
    publisherId: publisherId,
  });
  const products = results?.data;
  return (
    <>
      <div className="grid items-start justify-start w-full grid-cols-2 gap-3 px-2 pr-4 my-2 mb-10 sm:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4">
        {products.map((item, index) => (
          <Card
            key={index} // Use a unique key, such as `index` or a unique property from the `item` object
            image={item.image}
            title={item.title}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
      <div className="flex items-center justify-between px-2 mb-8">
        <MyPagination
          links={results?.links}
          from={results?.from}
          to={results?.to}
          total={results?.total}
        />
      </div>
    </>
  );
};

export default DataList;
