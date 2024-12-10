import { MyBlogCategoriesSelect } from "@/components/my-blog-categories-select";
import MyHeading from "@/components/ui/my-heading";
import MySearch from "@/components/ui/my-search";
import { getBlogCategories } from "@/services/blogs-services";
import { Suspense } from "react";
import DataList from "./data-list";
import MyLoadingAnimation from "@/components/ui/my-loading-animation";
import { getLocale, getTranslations } from "next-intl/server";

const Page = async (props) => {
  const t = await getTranslations('Index');
  const locale = await getLocale();
  const categories = await getBlogCategories();

  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  const categoryId = Number(searchParams?.categoryId) || "";

  return (
    <>
      <div className="flex flex-col gap-4 my-8 mt-4">
        {/* <MyHeading
          title="From the community"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        /> */}
        <div className="flex flex-wrap h-full gap-3">
          <MyBlogCategoriesSelect categories={categories} locale={locale} />
          <MySearch placeholder={t('searchNews')} />
        </div>
        <Suspense key={categoryId + search + currentPage} fallback={<MyLoadingAnimation />}>
          <DataList
            currentPage={currentPage}
            search={search}
            categoryId={categoryId}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
