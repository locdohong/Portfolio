import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import MyResume from "../documents/cv.pdf";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (tabs) => [],
    toolbarPlugin: {


    },
  },);

  return (
    <div id="resume" className="resume">
      <h1>My Resume</h1>
      <div  className="container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={MyResume} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </div>
  );
};

export default Resume;
