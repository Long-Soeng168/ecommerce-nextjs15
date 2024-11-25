import MyGallery from "@/components/my-gallery";
import { MyHomeSidebar } from "@/components/my-home-sidebar";
import MyProductHeader from "@/components/my-product-header";
import MyProductsList from "@/components/my-product-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MyKeyValueCard from "@/components/ui/my-key-value-card";
import { getBook } from "@/services/books-services";
import { getCategories } from "@/services/categories-services";
import { GripVertical, Minus, Plus, ShoppingCart, Slash } from "lucide-react";
import MyShowMoreText from "@/components/ui/my-show-more-text";
import moment from "moment";
import Link from "next/link";

// pages/product.js
const ProductPage = async ({ params }) => {
  const { id } = await params;
  const product = await getBook({ id: id });
  const image = product?.image;

  let images = [];
  if (product?.images?.length > 0) {
    images = product.images.map((item) => item.image);
  }

  const categories = await getCategories({
    withSub: 1,
    orderBy: "name",
    orderDir: "asc",
  });

  return (
    <div className="flex">
      <aside className="hidden px-2 py-4 mr-6 -translate-x-2 lg:inline-block bg-primary/5">
        <MyHomeSidebar categories={categories} />
      </aside>
      <main className="flex-1">
        <div className="grid w-full grid-cols-12 gap-8 mx-auto mt-8 ">
          <div className="col-span-12 mb-6 md:col-span-4 md:px-0">
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
                      {product.author.name}
                    </Link>
                  </MyKeyValueCard>
                )}
                {product?.publisher && (
                  <MyKeyValueCard title="Publisher">
                    <Link
                      className="hover:underline underline-offset-4 text-primary"
                      href="/products"
                    >
                      {product.publisher.name}
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
                    value={moment(product.publication_date).format(
                      "D - MMMM - YYYY"
                    )}
                  />
                )}
                {product?.number_of_pages && (
                  <MyKeyValueCard
                    title="Pages"
                    value={product.number_of_pages}
                  />
                )}
                {product?.isbn && (
                  <MyKeyValueCard title="ISBN" value={product.isbn} />
                )}
                {product?.edition && (
                  <MyKeyValueCard title="Edition" value={product.edition} />
                )}
                {product?.language && (
                  <MyKeyValueCard title="Language" value={product.language} />
                )}
                {product?.updated_at && (
                  <MyKeyValueCard
                    title="Last Update"
                    value={moment(product.updated_at).format("D - MMMM - YYYY")}
                  />
                )}
              </div>
            </div>
            <div className="mt-8">
              {product.discount != 0 ? (
                <p className="space-x-4 text-2xl font-semibold text-gray-400 dark:text-white">
                  <span className="line-through">{product.price} $</span>
                  <span className="text-red-500">
                    {product.price - (product.discount / 100) * product.price} $
                  </span>
                </p>
              ) : (
                <p className="text-2xl font-semibold text-red-500">
                  {product.price} $
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
          <MyProductsList />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
