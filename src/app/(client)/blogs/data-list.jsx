import React from "react";
import MyBlogCard from "@/components/ui/my-blog-card";
import Pagination from "./pagination";
import { getBlogs } from "@/services/blogs-services";

const DataList = async ({currentPage, search}) => {
  let results = await getBlogs({
    search: search,
    currentPage: currentPage,
    perPage: 2,
  });
  let blogs = results?.data || [];
  let totalPages = results?.last_page;
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogs.map((blog) => (
          <MyBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default DataList;
