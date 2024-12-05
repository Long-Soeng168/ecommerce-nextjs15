import MyGallery from "@/components/my-gallery";
import { Button } from "@/components/ui/button";
import MyKeyValueCard from "@/components/ui/my-key-value-card";
import { getBook } from "@/services/books-services";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import MyShowMoreText from "@/components/ui/my-show-more-text";
import moment from "moment";
import Link from "next/link";
import RelatedProducts from "@/app/(client)/products/[id]/components/related-products";
import { Suspense } from "react";
import MyLoadingAnimation from "@/components/ui/my-loading-animation";
import MyAddToCart from "@/components/my-add-to-cart";
// import BestSelling from "./components/best-selling";
// import Categories from "./components/categories";

// pages/product?.js
const ProductPage = async ({ params }) => {
  const { id } = await params;
  const product = await getBook({ id: id });
  const image = product?.image;

  let images = [];
  if (product?.images?.length > 0) {
    images = product?.images.map((item) => item.image);
  }


  return (
    <div className="lg:flex">
      {/* <aside className="flex-col hidden px-2 py-4 -translate-x-2 lg:flex bg-primary/5">
        <Categories />
        <hr className="my-6" />
        <Label className="text-primary">Best Selling</Label>
        <BestSelling />
      </aside> */}
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
            <MyShowMoreText maxLine={2} text={product?.short_description} />
            <hr className="w-full my-6" />
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

                {/* {product?.publication_date && (
                  <MyKeyValueCard
                    title="Publication Date"
                    value={moment(product?.publication_date).format(
                      "D - MMMM - YYYY"
                    )}
                  />
                )} */}
                {product?.year && (
                  <MyKeyValueCard
                    title="Publication Date"
                    value={product?.year}
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
                {product?.created_at && (
                  <MyKeyValueCard
                    title="Post Date"
                    value={moment(product?.created_at).format(
                      "D - MMMM - YYYY"
                    )}
                  />
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
            <div className="my-4">
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
            <div>
              <div className="flex items-center gap-4">
                {/* Quantity Control */}
                {/* <div className="flex items-center">
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
                </div> */}
                {/* Add to Cart Button */}
                <MyAddToCart product={product} />
              </div>
            </div>
          </div>
        </div>

        <Suspense key={product?.category_id} fallback={<MyLoadingAnimation />}>
          <RelatedProducts categoryId={product?.category_id} />
        </Suspense>
      </main>
    </div>
  );
};

export default ProductPage;
