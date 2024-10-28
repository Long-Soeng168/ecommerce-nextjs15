import MySlideShow from "@/components/my-slide-show";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { MyHomeSidebar } from "@/components/my-home-sidebar";
import MyProductsList from "@/components/my-product-list";
import MyCategoryList from "@/components/my-category-list";
import MyProductHeader from "@/components/my-product-header";
import MyFeatureList from "@/components/my-feature-list";
import MyBlogList from "@/components/my-blog-list";
import MyHeading from "@/components/ui/my-heading";
import MyPartnerList from "@/components/my-partner-list";

export default function Home() {
  return (
    <div>
      <div className="mt-4 mb-8 lg:mt-0">
        <MySlideShow />
      </div>

      <div className="mb-8">
        <MyCategoryList />
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <MyProductHeader title="New Arrivals" />
        <MyProductsList />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <MyProductHeader title="Best Selling" />
        <MyProductsList />
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

      <div className="flex flex-col gap-4 my-8 mt-16">
        <MyHeading
          title="Publisher"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        />
        <MyPartnerList />
      </div>

      <h1 className="mt-20">Hello Home Page</h1>
    </div>
  );
}
