import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ContactMe from "./Pages/contact-me.tsx";
import ChatviousInfo from "./Pages/chatvious-info.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact-me",
    element: <ContactMe />,
  },
  {
    path: "/chatvious-info",
    element: <ChatviousInfo />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
