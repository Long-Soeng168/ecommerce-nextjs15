import { getFooter } from "@/services/footer-services";
import MySocialLinkCard from "./ui/my-social-link-card";
import { getLinks } from "@/services/links-services";

const MyFooter = async () => {
  const footer = await getFooter();
  const links = await getLinks();
  return (
    <footer className="px-4 py-8 mt-20 text-white bg-gray-800 dark:bg-black dark:border-t">
      <div className="flex flex-col items-start justify-start gap-8 px-2 mx-auto max-w-screen-2xl sm:flex-row">
        <div className="flex-1 pr-10">
          <h4 className="mb-2 text-lg font-semibold">{footer?.name}</h4>
          {footer?.description && (
            <div dangerouslySetInnerHTML={{ __html: footer?.description }}></div>
          )}
        </div>
        {links?.length > 0 && (
          <div className="flex flex-col flex-1 sm:pl-10 sm:items-end">
            <div className="flex flex-col sm:items-center">
              <h4 className="mb-2 text-lg font-semibold">Social Media</h4>
              <ul className="space-x-4">
                {links?.map((item) => (
                  <MySocialLinkCard
                    image={item.image}
                    title={item.name}
                    link={item.link}
                    key={item.id}
                  />
                ))}
                <li></li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 text-center">
        <p>{footer?.copyright}</p>
      </div>
    </footer>
  );
};

export default MyFooter;
