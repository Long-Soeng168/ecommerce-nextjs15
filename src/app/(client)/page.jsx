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

export default function Home() {
  return (
    <div>
      <div className="mt-4 lg:mt-0">
        <MySlideShow className='mt-8 lg:mt-0'/>
      </div>
      <div>
        <MyProductsList />
      </div>
      <h1>Hello Home Page</h1>
    </div>
  );
}
