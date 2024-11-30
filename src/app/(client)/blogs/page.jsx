import { MyBlogCategoriesSelect } from "@/components/my-blog-categories-select";
import MyHeading from "@/components/ui/my-heading";
import MySearch from "@/components/ui/my-search";
import { getBlogCategories, getBlogs } from "@/services/blogs-services"; 
import { Suspense } from "react";
import DataList from "./data-list";
import Loading from "./loading";

const Page = async (props) => {
  const categories = await getBlogCategories();

  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <div className="flex flex-col gap-4 my-8 mt-16">
        <MyHeading
          title="From the community"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        />
        <div className="flex flex-wrap gap-3">
          <MyBlogCategoriesSelect categories={categories} />
          <MySearch placeholder="Search blogs..." />
        </div>
        <Suspense
          key={search + currentPage}
          fallback={<Loading />}
        >
          <DataList currentPage={currentPage} search={search} />
        </Suspense>

       
      </div>
    </>
  );
};

export default Page;
