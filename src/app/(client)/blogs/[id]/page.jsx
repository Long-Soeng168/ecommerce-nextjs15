import { Separator } from "@/components/ui/separator";
import {
  getBlog,
  getBlogCategories,
  getBlogs,
} from "@/services/blogs-services";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);

  const categories = await getBlogCategories();

  let results = await getBlogs({ categoryId: blog?.news_category_id });
  let relatedBlogs = results?.data || [];
  return (
    <div className="bg-background text-foreground">
      <section className="w-full grid grid-cols-1 gap-8 px-4 mt-8 md:grid-cols-[3fr,1fr] md:gap-12 ">
        <div>
          <h1 className="mb-4 text-2xl font-bold tracking-tighter">
            {blog.name}
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div>
              {blog?.created_at &&
                new Date(blog.created_at).toLocaleDateString("en", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[5fr,2fr] md:gap-12 ">
        <article>
          {blog?.image && (
            <Image
              width={600}
              height={600}
              className="object-cover w-full rounded-md aspect-video"
              src={process.env.IMAGE_BLOG_URL + blog.image}
              alt={"Image's " + blog.name}
            />
          )}
          {blog?.description ? (
            <div
              className="no-tailwind"
              dangerouslySetInnerHTML={{ __html: blog?.description }}
            />
          ) : (
            <p>No description available.</p>
          )}
        </article>
        <aside className="space-y-8">
          <div className="p-6 border rounded-lg bg-background">
            <h3 className="text-lg font-semibold">Categories</h3>
            {categories && (
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href="#"
                    className="flex items-center justify-between text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.pages_count != 0 && category.pages_count}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="p-6 border rounded-lg bg-background">
            <h3 className="text-lg font-semibold">Related Posts</h3>
            <div className="mt-4 space-y-4">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.id}`}
                  className="group items-center grid grid-cols-[100px,1fr] gap-4"
                  prefetch={false}
                >
                  <Image
                    width={100}
                    height={100}
                    className="object-cover w-full aspect-video"
                    src={process.env.IMAGE_BLOG_URL + blog.image}
                    alt={"Image's blog"}
                  />

                  <div>
                    <h4 className="text-sm font-medium group-hover:underline line-clamp-2">
                      {blog.name}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {blog.short_description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
