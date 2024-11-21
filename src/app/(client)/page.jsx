import MySlideShow from "@/components/my-slide-show";
import MyProductsList from "@/components/my-product-list";
import MyCategoryList from "@/components/my-category-list";
import MyProductHeader from "@/components/my-product-header";
import MyFeatureList from "@/components/my-feature-list";
import MyBlogList from "@/components/my-blog-list";
import MyHeading from "@/components/ui/my-heading";
import MyPartnerList from "@/components/my-partner-list";
import MyPromotions from "@/components/my-promotions";
import {
  getBestSellingBooks,
  getNewArrivalBooks,
} from "@/services/books-services";
import { getPromotions } from "@/services/promotions-services";
import { getBlogs } from "@/services/blogs-services";

export default async function Home() {
  const resultNewBooks = await getNewArrivalBooks();
  const firstNewArrivalBooks = resultNewBooks?.first_set || [];
  const secondNewArrivalBooks = resultNewBooks?.second_set || [];

  const resultBestSellingBooks = await getBestSellingBooks();
  const firstBestSellingBooks = resultBestSellingBooks?.first_set || [];
  const secondBestSellingBooks = resultBestSellingBooks?.second_set || [];

  const resultPromotions = await getPromotions();
  const promotions = resultPromotions?.data || [];

  const resultsBlogs = await getBlogs({ perPage: 3 });
  const blogs = resultsBlogs.data;

  return (
    <div>
      <div className="mt-2 mb-8">
        <MySlideShow />
      </div>

      <div className="mb-8">
        <MyCategoryList key="category-list-key" />
      </div>

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

      {promotions?.length > 0 && (
        <div className="mb-20">
          <MyPromotions promotions={promotions} />
        </div>
      )}

      <div className="max-w-screen-xl mx-auto mb-20 space-y-4">
        <MyHeading title="Partners" />
        <MyPartnerList />
      </div>

      {blogs?.length > 0 && (
        <div className="flex flex-col gap-4 mb-20">
          <MyHeading
            title="From the community"
            description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
          />
          <MyBlogList blogs={blogs}/>
        </div>
      )}

      <div className="my-16">
        <MyFeatureList />
      </div>
    </div>
  );
}
