import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <section className="w-full grid grid-cols-1 gap-8 px-4 mt-8 md:grid-cols-[3fr,1fr] md:gap-12 ">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tighter">
            The Future of Web Development: Embracing the Power of Vercel
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div>
              <img
                src="/images/books/book1.png"
                alt="Author Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                style={{ aspectRatio: "40/40", objectFit: "cover" }}
              />
            </div>
            <div>John Doe</div>
            <Separator orientation="vertical" />
            <div>Published on August 8, 2024</div>
          </div>
        </div>
      </section>
      <div className="w-full grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[3fr,1fr] md:gap-12 ">
        <article className="prose prose-gray dark:prose-invert">
          <img
            src="/images/slides/image4.png"
            alt="Blog Post Image"
            width={800}
            height={450}
            className="object-cover w-full rounded-lg aspect-video"
          />
          <div className="py-8">
            <p>
              In the ever-evolving landscape of web development, the rise of
              Vercel has been a game-changer. As a leading platform for building
              and deploying modern web applications, Vercel has revolutionized
              the way developers approach their craft, offering a seamless and
              user-friendly experience that empowers them to create exceptional
              digital experiences.
            </p>
            <h2>Embracing the Power of Vercel</h2>
            <p>
              Vercel's approach to web development is centered around
              simplicity, scalability, and performance. By providing a
              comprehensive suite of tools and services, Vercel enables
              developers to focus on what matters most: crafting innovative and
              engaging web applications.
            </p>
            <h3>Streamlined Deployment and Hosting</h3>
            <p>
              One of the standout features of Vercel is its seamless deployment
              and hosting capabilities. With a single click, developers can
              effortlessly deploy their applications to Vercel's global
              infrastructure, ensuring lightning-fast load times and reliable
              uptime for their users.
            </p>
            <figure>
              <img
                src="/placeholder.png"
                alt="Blog Post Image"
                width={800}
                height={450}
                className="object-cover rounded-lg aspect-video"
              />
              <figcaption>A caption for the blog post image</figcaption>
            </figure>
            <h3>Powerful Collaboration and Workflow</h3>
            <p>
              Vercel's collaborative features empower teams to work together
              seamlessly. With built-in code review tools and real-time
              deployment previews, developers can iterate and iterate, ensuring
              that every release is polished and ready for the world to see.
            </p>
            <blockquote>
              <p>
                "Vercel has transformed the way we approach web development.
                The\n platform's ease of use and powerful features have allowed
                our team\n to focus on innovation, rather than infrastructure
                management."
              </p>
              <cite>- Jane Doe, Lead Developer at Acme Inc.</cite>
            </blockquote>
            <h3>Cutting-Edge Performance and Scalability</h3>
            <p>
              Vercel's infrastructure is designed to scale dynamically, ensuring
              that your web applications can handle even the most demanding
              traffic spikes. With advanced caching, content delivery, and
              serverless functions, Vercel empowers developers to build
              high-performance applications that deliver an exceptional user
              experience.
            </p>
            <h2>The Future of Web Development</h2>
            <p>
              As the web continues to evolve, the need for efficient, scalable,
              and user-centric web development platforms has never been greater.
              Vercel stands at the forefront of this revolution, offering a
              comprehensive solution that enables developers to push the
              boundaries of what's possible on the modern web.
            </p>
            <p>
              By embracing the power of Vercel, developers can unlock new levels
              of creativity, productivity, and success, paving the way for a
              future where the web is more accessible, engaging, and
              transformative than ever before.
            </p>
          </div>
        </article>
        <aside className="space-y-8">
          <div className="p-6 border rounded-lg bg-background">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="mt-4 space-y-2">
              <Link
                href="#"
                className="flex items-center justify-between text-sm font-medium hover:underline"
                prefetch={false}
              >
                <span>Web Development</span>
                <span className="text-xs text-muted-foreground">12</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-sm font-medium hover:underline"
                prefetch={false}
              >
                <span>Vercel</span>
                <span className="text-xs text-muted-foreground">8</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-sm font-medium hover:underline"
                prefetch={false}
              >
                <span>Performance</span>
                <span className="text-xs text-muted-foreground">6</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-sm font-medium hover:underline"
                prefetch={false}
              >
                <span>Serverless</span>
                <span className="text-xs text-muted-foreground">4</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between text-sm font-medium hover:underline"
                prefetch={false}
              >
                <span>Collaboration</span>
                <span className="text-xs text-muted-foreground">3</span>
              </Link>
            </div>
          </div>
          <div className="p-6 border rounded-lg bg-background">
            <h3 className="text-lg font-semibold">Related Posts</h3>
            <div className="mt-4 space-y-4">
              <Link
                href="#"
                className="group grid grid-cols-[48px,1fr] items-start gap-4"
                prefetch={false}
              >
                <img
                  src="/placeholder.png"
                  alt="Related Post Image"
                  width={48}
                  height={48}
                  className="object-cover rounded-md aspect-square"
                />
                <div>
                  <h4 className="text-sm font-medium group-hover:underline">
                    Unlocking the Power of Serverless with Vercel
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Learn how to leverage Vercel's serverless functions to build
                    scalable and efficient web applications.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group grid grid-cols-[48px,1fr] items-start gap-4"
                prefetch={false}
              >
                <img
                  src="/placeholder.png"
                  alt="Related Post Image"
                  width={48}
                  height={48}
                  className="object-cover rounded-md aspect-square"
                />
                <div>
                  <h4 className="text-sm font-medium group-hover:underline">
                    Mastering Vercel's Deployment Workflows
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Discover how to streamline your deployment process and
                    collaborate more effectively with Vercel.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group grid grid-cols-[48px,1fr] items-start gap-4"
                prefetch={false}
              >
                <img
                  src="/placeholder.png"
                  alt="Related Post Image"
                  width={48}
                  height={48}
                  className="object-cover rounded-md aspect-square"
                />
                <div>
                  <h4 className="text-sm font-medium group-hover:underline">
                    Optimizing Web Performance with Vercel
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Learn how to leverage Vercel's advanced caching and CDN
                    features to deliver lightning-fast web experiences.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
