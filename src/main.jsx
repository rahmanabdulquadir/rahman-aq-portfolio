import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[url('./assets/images/grid.png')] bg-fixed bg-cover text-white">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
