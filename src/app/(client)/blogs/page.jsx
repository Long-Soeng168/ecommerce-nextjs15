import { MyBlogCategoriesSelect } from "@/components/my-blog-categories-select";
import MyBlogList from "@/components/my-blog-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MyBlogCard from "@/components/ui/my-blog-card";
import MyHeading from "@/components/ui/my-heading";
import { getBlogCategories, getBlogs } from "@/services/blogs-services";
import { Search } from "lucide-react";
import React from "react";

const Page = async () => {
  let results = await getBlogs();
  let blogs = results?.data || [];
  const categories = await getBlogCategories();
  console.log(categories);

  return (
    <>
      <div className="flex flex-col gap-4 my-8 mt-16">
        <MyHeading
          title="From the community"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        />
        <div className="flex gap-4">
          <MyBlogCategoriesSelect categories={categories} />
          <div className="flex flex-1 bg-white border rounded-lg shadow-sm dark:bg-transparent dark:text-primary border-primary">
            <Input
              autoFocus
              className="border-none shadow-none dark:text-white dark:placeholder-white min-w-40 focus-visible:ring-0"
              placeholder="Search Blog..."
            />
            <Button variant="gosh" size="icon">
              <Search className="h-[1.2rem] w-[1.2rem] dark:text-black" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {blogs.map((blog) => (
            <MyBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
