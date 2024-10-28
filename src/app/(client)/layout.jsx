import MyHeader from "@/components/my-header";
import { MyHomeSidebar } from "@/components/my-home-sidebar";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <>
      <div className="px-2 mx-auto max-w-screen-2xl">
        <MyHeader key="home-header" />
        {children}
        {/* <div className="flex">
          <div>
            <MyHomeSidebar />
          </div>
          {children}
        </div> */}
      </div>
    </>
  );
};

export default ClientLayout;
