"use client";
import { POSCartProvider } from "@/contexts/POSContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AdminLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = checkAuth();
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  return (
    <div>
      <POSCartProvider>{children}</POSCartProvider>
    </div>
  );
};

export default AdminLayout;
