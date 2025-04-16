import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useLocation } from "react-router-dom";

const PdfView = () => {
  const { state } = useLocation();

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: (zoom) => {
          zoom(1.5);
        },
        onExitFullScreen: (zoom) => {
          zoom(1);
        },
      },
    },
    // setInitialTab: () => {},
    // This will remove the download button
    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(toolbarSlot) => {
          const {
            CurrentPageInput,
            Download,
            EnterFullScreen,
            GoToNextPage,
            GoToPreviousPage,
            NumberOfPages,

            ShowSearchPopover,
            Zoom,
            ZoomIn,
            ZoomOut,
          } = toolbarSlot;

          return (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <div style={{ padding: "0 2px" }}>
                <ShowSearchPopover />
              </div>
              <div style={{ padding: "0 2px" }}>
                <ZoomOut />
              </div>
              <div style={{ padding: "0 2px" }}>
                <Zoom />
              </div>
              <div style={{ padding: "0 2px" }}>
                <ZoomIn />
              </div>
              <div style={{ padding: "0 2px", marginLeft: "auto" }}>
                <GoToPreviousPage />
              </div>
              <div style={{ padding: "5px 2px" }}>
                <CurrentPageInput />
              </div>
              <div style={{ padding: "2px 2px", color: "white" }}>
                / <NumberOfPages />
              </div>
              <div style={{ padding: "0 2px" }}>
                <GoToNextPage />
              </div>
              <div
                style={{ padding: "0 2px", marginLeft: "auto", color: "white" }}
              >
                <EnterFullScreen />
              </div>
              {/* <div style={{ padding: "0 2px" }}>
                <Print />
              </div> */}
              {/* <div style={{ padding: "0 2px" }}>
                <Download />
              </div> */}
              {/* Download button is not included here */}
            </div>
          );
        }}
      </Toolbar>
    ),
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Viewer
          fileUrl={state}
          plugins={[defaultLayoutPluginInstance]}
          enableSmoothScroll
          renderError={(error) => {
            return (
              <div className="text-red-500 flex justify-center items-center h-full bg-gray-700">
                <h1> This PDF is not available. </h1>
              </div>
            );
          }}
          theme={{
            theme: "dark",
            colors: {
              primary: "#a41e11", // Redis red
              primaryContent: "#ffffff",
              secondary: "#d82c20", // Lighter red
              secondaryContent: "#ffffff",
              accent: "#a41e11",
              accentContent: "#ffffff",
            },
          }}
        />
      </div>
    </Worker>
  );
};

export default PdfView;
