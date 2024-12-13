"use client";

import React, { useState, useEffect } from "react";
import PDFViewer from "@/components/pdf-viewer"; // Import your PDFViewer component

const Page = () => {
  const [isClient, setIsClient] = useState(false); // State to check if we are in the client browser
  // Use useEffect to update the state when the component mounts on the client side
  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts
  }, []);

  if (!isClient) {
    // If it's not the client side, return null (or a loading indicator)
    return null;
  }
  console.log("running");

  return (
    <div>
      {/* Render the PDFViewer only on the client */}
      <PDFViewer />
      <PDFViewer pdfUrl="https://admin.thnal.org/sample.pdf" />
    </div>
  );
};

export default Page;
