import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust import path based on your project

const MyBlogCard = ({ blog }) => {
  return (
    <Link
      href={`blogs/${blog.id}`}
      className="flex flex-col justify-between p-2 transition-shadow duration-300 border rounded-lg shadow cursor-pointer border-border bg-accent hover:shadow-xl"
    >
      <div>
        <Image
          width={600}
          height={600}
          className="object-cover w-full rounded-md aspect-video"
          src={process.env.IMAGE_BLOG_URL + blog.image}
          alt={'Image\'s ' + blog.name}
        />
        <div className="my-4">
          <h3 className="mb-2 text-xl font-bold text-foreground line-clamp-2">
            {blog.name}
          </h3>
          <p className="mb-2 text-background-foreground line-clamp-3">
            {blog.short_description}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="link" className="mt-2 text-lg text-primary">
          Read More
        </Button>
      </div>
    </Link>
  );
};

export default MyBlogCard;
