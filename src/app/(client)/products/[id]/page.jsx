import MyGallery from "@/components/my-gallery";
import { MyHomeSidebar } from "@/components/my-home-sidebar";
import MyProductHeader from "@/components/my-product-header";
import MyProductsList from "@/components/my-product-list";
import { Button } from "@/components/ui/button";
import MyKeyValueCard from "@/components/ui/my-key-value-card";
import {
  getBestSellingBooks,
  getBook,
  getBooks,
} from "@/services/books-services";
import { getCategories } from "@/services/categories-services";
import { GripVertical, Minus, Plus, ShoppingCart, Slash } from "lucide-react";
import MyShowMoreText from "@/components/ui/my-show-more-text";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BOOK_URL } from "@/config/env";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

// pages/product?.js
const ProductPage = async ({ params }) => {
  const { id } = await params;
  const product = await getBook({ id: id });
  const image = product?.image;

  let images = [];
  if (product?.images?.length > 0) {
    images = product?.images.map((item) => item.image);
  }

  const categories = await getCategories({
    withSub: 1,
    orderBy: "name",
    orderDir: "asc",
  });

  const resultBooks = await getBooks({
    categoryId: product?.category_id,
    randomOrder: 1,
  });
  const relatedBooks = resultBooks?.data;

  const resultBestSellingBooks = await getBestSellingBooks({ limit: 10 });
  let bestSellingBooks = resultBestSellingBooks?.first_set || [];

  return (
    <div className="lg:flex">
      <aside className="flex-col hidden px-2 py-4 -translate-x-2 lg:flex bg-primary/5">
        <MyHomeSidebar categories={categories} />
        <hr className="my-6" />
        <Label className="text-primary">Best Selling</Label>
        <ScrollArea className="h-[100vh] mt-2 w-64 rounded-md">
          {bestSellingBooks?.slice(1).map((book) => (
            <Link
              key={book.id}
              href={`/products/${book.id}`}
              className="group mb-2 bg-white overflow-hidden rounded-sm items-start grid grid-cols-[62px,1fr] gap-2"
              prefetch={false}
            >
              <Image
                width={50}
                height={50}
                className="object-cover w-full h-full aspect-book"
                src={IMAGE_BOOK_URL + book.image}
                alt={"Image's book"}
              />

              <div className="py-1 pr-2">
                <h4 className="font-medium text-md group-hover:underline line-clamp-1">
                  {book.title}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {book.short_description} $
                </p>
                {book.discount != 0 ? (
                  <p className="space-x-2 overflow-hidden text-xs text-gray-400 text-ellipsis">
                    <span className="line-through">{book.price} $</span>
                    <span className="text-red-400">
                      {book.price - (book.discount / 100) * book.price} $
                    </span>
                  </p>
                ) : (
                  <p className="max-w-full overflow-hidden text-xs font-bold text-red-400 text-ellipsis">
                    {book.price} $
                  </p>
                )}
              </div>
            </Link>
          ))}
          {bestSellingBooks?.slice(1).map((book) => (
            <Link
              key={1 + book.id}
              href={`/products/${book.id}`}
              className="group bg-white overflow-hidden rounded-sm items-start grid grid-cols-[62px,1fr] gap-2"
              prefetch={false}
            >
              <Image
                width={50}
                height={50}
                className="object-cover w-full h-full aspect-book"
                src={IMAGE_BOOK_URL + book.image}
                alt={"Image's book"}
              />

              <div className="py-1 pr-2">
                <h4 className="font-medium text-md group-hover:underline line-clamp-1">
                  {book.title}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {book.short_description} $
                </p>
                {book.discount != 0 ? (
                  <p className="space-x-2 overflow-hidden text-xs text-gray-400 text-ellipsis">
                    <span className="line-through">{book.price} $</span>
                    <span className="text-red-400">
                      {book.price - (book.discount / 100) * book.price} $
                    </span>
                  </p>
                ) : (
                  <p className="max-w-full overflow-hidden text-xs font-bold text-red-400 text-ellipsis">
                    {book.price} $
                  </p>
                )}
              </div>
            </Link>
          ))}
        </ScrollArea>
      </aside>
      <main className="lg:flex-1">
        <div className="grid w-full grid-cols-12 gap-2 mx-auto mt-8 ">
          <div className="col-span-12 mx-6 mb-6 md:col-span-4 md:px-0">
            <MyGallery image={image} images={images} />
          </div>

          {/* Right Item */}
          <div className="col-span-12 md:col-span-8">
            <h1 className="block mt-1 mb-2 text-2xl leading-tight font-lg">
              {product?.title}
            </h1>
            <MyShowMoreText text={product?.short_description} />

            <hr className="w-full mt-4" />
            <div className="flex flex-col gap-6 my-6">
              <div className="flex flex-col gap-2">
                {product?.author && (
                  <MyKeyValueCard title="Author">
                    <Link
                      className="hover:underline underline-offset-4 text-primary"
                      href="/products"
                    >
                      {product?.author.name}
                    </Link>
                  </MyKeyValueCard>
                )}
                {product?.publisher && (
                  <MyKeyValueCard title="Publisher">
                    <Link
                      className="hover:underline underline-offset-4 text-primary"
                      href="/products"
                    >
                      {product?.publisher.name}
                    </Link>
                  </MyKeyValueCard>
                )}

                {product?.category && (
                  <MyKeyValueCard title="Category">
                    <Link
                      className="hover:underline underline-offset-4 text-primary"
                      href="/products"
                    >
                      {product?.category?.name}
                    </Link>
                    <p className="text-sm capitalize"></p>
                    {product?.sub_category && (
                      <>
                        <p className="mx-2"> / </p>
                        <Link
                          className="hover:underline underline-offset-4 text-primary"
                          href="/products"
                        >
                          {product?.sub_category?.name}
                        </Link>
                      </>
                    )}
                  </MyKeyValueCard>
                )}

                {product?.publication_date && (
                  <MyKeyValueCard
                    title="Publication Date"
                    value={moment(product?.publication_date).format(
                      "D - MMMM - YYYY"
                    )}
                  />
                )}
                {product?.number_of_pages && (
                  <MyKeyValueCard
                    title="Pages"
                    value={product?.number_of_pages}
                  />
                )}
                {product?.isbn && (
                  <MyKeyValueCard title="ISBN" value={product?.isbn} />
                )}
                {product?.edition && (
                  <MyKeyValueCard title="Edition" value={product?.edition} />
                )}
                {product?.language && (
                  <MyKeyValueCard title="Language" value={product?.language} />
                )}
                {product?.updated_at && (
                  <MyKeyValueCard
                    title="Last Update"
                    value={moment(product?.updated_at).format(
                      "D - MMMM - YYYY"
                    )}
                  />
                )}
              </div>
            </div>
            <div className="mt-8">
              {product?.discount != 0 ? (
                <p className="space-x-4 text-2xl font-semibold text-gray-400 dark:text-white">
                  <span className="line-through">{product?.price} $</span>
                  <span className="text-red-500">
                    {product?.price -
                      (product?.discount / 100) * product?.price}{" "}
                    $
                  </span>
                </p>
              ) : (
                <p className="text-2xl font-semibold text-red-500">
                  {product?.price} $
                </p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-4">
                {/* Quantity Control */}
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    className="rounded-tr-none rounded-br-none"
                  >
                    <Minus className="text-primary" />
                  </Button>
                  <Button
                    variant="outline"
                    className="px-6 font-bold rounded-none cursor-auto border-x-0"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-tl-none rounded-bl-none"
                  >
                    <Plus className="text-primary" />
                  </Button>
                </div>
                {/* Add to Cart Button */}
                <Button>
                  <ShoppingCart /> ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-16 mb-4">
          <MyProductHeader title="Related" />
          <MyProductsList books={relatedBooks} />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
