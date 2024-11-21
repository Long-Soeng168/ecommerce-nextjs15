import { getAbout } from "@/services/page-services";
import React from "react";

const AboutPage = async () => {
  let about = await getAbout();

  return (
    <div className="flex flex-col items-center min-h-screen mt-8">
      {about?.description ? (
        <div
          className="no-tailwind"
          dangerouslySetInnerHTML={{ __html: about.description }}
        />
      ) : (
        <p>No description available.</p>
      )}
    </div>
  );
};

export default AboutPage;
