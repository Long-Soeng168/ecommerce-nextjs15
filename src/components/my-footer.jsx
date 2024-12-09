import { getFooter } from "@/services/footer-services";
import MySocialLinkCard from "./ui/my-social-link-card";
import { getLinks } from "@/services/links-services";
import { getTranslations } from "next-intl/server";

const MyFooter = async () => {
  const t = await getTranslations('Index');
  const footer = await getFooter();
  const links = await getLinks();
  return (
    <footer className="px-4 py-8 text-white bg-gray-800 dark:bg-black dark:border-t">
      <div className="flex flex-col items-start justify-start max-w-screen-xl gap-8 px-2 mx-auto sm:flex-row">
        <div className="flex-1 pr-10">
          <h4 className="mb-2 text-lg font-semibold">{footer?.name}</h4>
          {footer?.description && (
            <div dangerouslySetInnerHTML={{ __html: footer?.description }}></div>
          )}
        </div>
        {links?.length > 0 && (
          <div className="flex flex-col flex-1 sm:pl-10 sm:items-end">
            <div className="flex flex-col sm:items-center">
              <h4 className="mb-2 text-lg ">{t('socialMedia')}</h4>
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
