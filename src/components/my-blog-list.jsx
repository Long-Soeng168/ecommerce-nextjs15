import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const blogs = [
  {
    id: 1,
    title: "Literary Escapes: Exploring New Worlds Through Books",
    image: "/images/blogs/image9.png",
    description:
      "Discover new realms and experiences with our handpicked selection of books that transport you to different worlds and perspectives.",
  },
  {
    id: 2,
    title: "Literary Escapes: Exploring New Worlds Through Books",
    image: "/images/blogs/image6.png",
    description:
      "Travel through time, explore diverse cultures, and expand your horizons from the comfort of your reading nook.",
  },
  {
    id: 3,
    title: "Literary Escapes: Exploring New Worlds Through Books",
    image: "/images/blogs/image8.png",
    description:
      "Dive into the unknown and enjoy immersive storytelling that captures the beauty and complexity of the human experience.",
  },
];

const MyBlogList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col justify-between p-2 transition-shadow duration-300 border rounded-lg shadow cursor-pointer border-border bg-accent hover:shadow-xl"
        >
          <div>
            <Image
              width={600}
              height={600}
              className="object-cover w-full rounded-md aspect-video"
              src={blog.image}
              alt={blog.title}
            />
            <div className="my-4">
              <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                {blog.title}
              </h3>
              <p className="mb-2 text-background-foreground line-clamp-2">
                {blog.description}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="link" className="mt-2 text-lg text-primary">
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBlogList;
