import MySlideShow from "@/components/my-slide-show";
import MyProductsList from "@/components/my-product-list";
import MyCategoryList from "@/components/my-category-list";
import MyProductHeader from "@/components/my-product-header";
import MyFeatureList from "@/components/my-feature-list";
import MyBlogList from "@/components/my-blog-list";
import MyHeading from "@/components/ui/my-heading";
import MyPartnerList from "@/components/my-partner-list";
import MyPromotions from "@/components/my-promotions";

export default function Home() {
  return (
    <div>
      <div className="mt-4 mb-8 lg:mt-0">
        <MySlideShow />
      </div>

      <div className="mb-8">
        <MyCategoryList key='category-list-key' />
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <MyProductHeader title="New Arrivals" />
        <MyProductsList />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <MyProductHeader title="Best Selling" />
        <MyProductsList />
      </div>

      <div className="my-16">
        <MyPromotions />
      </div>

      <div className="my-8">
        <MyFeatureList />
      </div>

      <div className="flex flex-col gap-4 my-8 mt-16">
        <MyHeading
          title="From the community"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        />
        <MyBlogList />
      </div>

      <div className="max-w-screen-xl mx-auto mt-16 space-y-4">
        <MyHeading
          title="Shops"
        />
        <MyPartnerList />
      </div>

     
    </div>
  );
}
