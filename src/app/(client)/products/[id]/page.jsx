import MyGallery from "@/components/my-gallery";
import MyProductHeader from "@/components/my-product-header";
import MyProductsList from "@/components/my-product-list";
import { Button } from "@/components/ui/button";
import MyKeyValueCard from "@/components/ui/my-key-value-card";
import { Minus, Plus } from "lucide-react";

// pages/product.js
const ProductPage = () => {

  return (
    <>
      <div className="grid max-w-screen-lg grid-cols-12 gap-8 mx-auto mt-8">
        <div className="col-span-12 mb-6 md:col-span-5 md:px-0">
          <MyGallery />
        </div>

        {/* Right Item */}
        <div className="col-span-12 pl-4 md:col-span-7">
          <h1 className="block mt-1 mb-2 text-2xl leading-tight font-lg">
            Beautiful Things' A Memoir
          </h1>
          <hr className="w-full" />
          <div className="flex flex-col gap-6 my-4">
            <div className="flex flex-col gap-2">
              <MyKeyValueCard title='Author' value='Jim Collins' />
              <MyKeyValueCard title='Year' value='2001' />
              <MyKeyValueCard title='Pages' value='299' />
              <MyKeyValueCard title='ISBN' value='9712676090' />
              <MyKeyValueCard title='Last Update' value='14-Sep-2024' />
              <MyKeyValueCard title='' value='' />
              
            </div>
          </div>
          <hr />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-destructive dark:text-white">$15.00</h2>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2">
              {/* Quantity Control */}
              <Button variant="outline">
                <Minus />
              </Button>
              <span className="px-3 py-1 border-t border-b border-gray-300">
                1
              </span>
              <Button variant="outline">
                <Plus />
              </Button>
              {/* Add to Cart Button */}
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-16 mb-4">
        <MyProductHeader title="Related" />
        <MyProductsList />
      </div>
    </>
  );
};

export default ProductPage;
