import { getAbout } from "@/services/page-services";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

const AboutPage = async () => {
  let about = await getAbout();
  const t = getTranslations("Index");
  const locale = await getLocale();

  return (
    <div className="flex flex-col items-center min-h-screen mt-8">
      {about?.description ? (
        <div
          className="no-tailwind"
          dangerouslySetInnerHTML={{
            __html: locale === "kh" ? about.description_kh : about.description,
          }}
        />
      ) : (
        <p>{t("noData")}</p>
      )}
    </div>
  );
};

export default AboutPage;
