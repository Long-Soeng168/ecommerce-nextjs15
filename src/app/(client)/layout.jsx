import MyFooter from "@/components/my-footer";
import MyHeader from "@/components/my-header";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <>
      <div className="bg-primary dark:bg-background">
        <div className="max-w-screen-xl px-2 mx-auto">
          <MyHeader key="home-header" />
        </div>
      </div>
      <div className="min-h-[55vh] px-2 mx-auto max-w-screen-xl">
        <CartProvider>{children}</CartProvider>
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
