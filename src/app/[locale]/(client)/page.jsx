import MySlideShow from "@/components/my-slide-show";
import MyCategoryList from "@/components/my-category-list";
import MyFeatureList from "@/components/my-feature-list";
import MyBlogList from "@/components/my-blog-list";
import MyHeading from "@/components/ui/my-heading";
import { getBlogs } from "@/services/blogs-services";
import NewArrivals from "@/components/homepage/new-arrivals";
import { Suspense } from "react";
import MyLoadingAnimation from "@/components/ui/my-loading-animation";
import BestSellings from "@/components/homepage/best-sellings";
import Promotion from "@/components/homepage/promotion";
import Blogs from "@/components/homepage/blogs";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<MyLoadingAnimation />}>
        <MySlideShow className="mt-2 mb-8" />
      </Suspense>

      <Suspense fallback={<MyLoadingAnimation />}>
        <MyCategoryList key="category-list-key" className="mb-8" />
      </Suspense>

      <Suspense fallback={<MyLoadingAnimation />}>
        <NewArrivals />
      </Suspense>

      <Suspense fallback={<MyLoadingAnimation />}>
        <BestSellings />
      </Suspense>

      <Suspense fallback={<MyLoadingAnimation />}>
        <Promotion />
      </Suspense>

      {/* <div className="max-w-screen-xl mx-auto mb-20 space-y-4">
        <MyHeading title="Partners" />
        <MyPartnerList />
      </div> */}

      <Suspense fallback={<MyLoadingAnimation />}>
        <Blogs />
      </Suspense>

      <Suspense fallback={<MyLoadingAnimation />}>
        <MyFeatureList className="my-16" />
      </Suspense>
    </div>
  );
}
