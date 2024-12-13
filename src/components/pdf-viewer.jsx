"use client";
import React from "react";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer, ProgressBar } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({pdfUrl = '/sample.pdf'}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="max-w-full mx-auto h-[100vh]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          defaultScale={1}
          fileUrl={pdfUrl}
          renderLoader={(percentages) => (
            <div style={{ width: "240px" }}>
              <ProgressBar progress={Math.round(percentages)} />
            </div>
          )}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
