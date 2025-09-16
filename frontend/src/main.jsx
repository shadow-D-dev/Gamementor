import "../index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/routes/routes.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
  throw new Error("Missing  Publishable   Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <>
        <RouterProvider router={router} />
        <ToastContainer />
      </>
    </ClerkProvider>
  </StrictMode>,
);
