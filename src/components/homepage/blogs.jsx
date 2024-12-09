import { getBlogs } from "@/services/blogs-services";
import React from "react";
import MyHeading from "../ui/my-heading";
import MyBlogList from "../my-blog-list";

const Blogs = async () => {
  const resultsBlogs = await getBlogs({ perPage: 3 });
  const blogs = resultsBlogs?.data;
  return (
    <>
      {blogs?.length > 0 && (
        <div className="flex flex-col gap-4 mb-20">
          <MyHeading
            title="From the community"
            description="We are a rapidly growing community of members from various libraries in Cambodia, united as one digital library community."
          />
          <MyBlogList blogs={blogs} />
        </div>
      )}
    </>
  );
};

export default Blogs;
