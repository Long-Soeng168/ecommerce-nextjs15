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

export default function Home() {
  return (
    <div>
      <MySlideShow />
      <div>
        
      </div>
      <h1>Hello Home Page</h1>
    </div>
  );
}
