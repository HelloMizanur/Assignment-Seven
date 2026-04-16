import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import { InteractionProvider } from "./context/InteractionContext"; // Import koro

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InteractionProvider>
      <RouterProvider router={router} />
    </InteractionProvider>
  </StrictMode>,
);
