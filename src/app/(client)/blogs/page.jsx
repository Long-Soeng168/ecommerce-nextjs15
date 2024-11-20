import MyBlogList from "@/components/my-blog-list";
import MyBlogCard from "@/components/ui/my-blog-card";
import MyHeading from "@/components/ui/my-heading";
import { getBlogs } from "@/services/blogs-services";
import React from "react";

const Page = async () => {
  let results = await getBlogs();
  let blogs = results?.data;
  return (
    <>
      <div className="flex flex-col gap-4 my-8 mt-16">
        <MyHeading
          title="From the community"
          description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
        />
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
