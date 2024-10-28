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
        <MyProductHeader title='New Arrivals' />
        <MyProductsList />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <MyProductHeader title='Best Selling' />
        <MyProductsList />
      </div>

      <div className="my-8">
        <MyFeatureList />
      </div>

      <h1 className="mt-20">Hello Home Page</h1>
    </div>
  );
}
