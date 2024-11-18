import MyFooter from "@/components/my-footer";
import MyHeader from "@/components/my-header";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <>
      <div className="px-2 mx-auto  max-w-screen-2xl">
      <MyHeader key="home-header" />
      </div>
      <div className="min-h-[70vh] px-2 mx-auto max-w-screen-2xl">
        {children}
      </div>
      <MyFooter />
      {/* <div className="flex">
          <div>
            <MyHomeSidebar />
          </div>
          {children}
        </div> */}
    </>
  );
};

export default ClientLayout;
