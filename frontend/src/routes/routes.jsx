import { createBrowserRouter } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Home from "../components/Home.jsx";
import Aboutus from "../components/Aboutus.jsx";
import RootLayout from "./RootLayout.jsx";
import TournamentPage from "../components/TournamentPage.jsx";
import VideoList from "../components/VideoList.jsx";
import AdminPage from "../components/AdminPage.jsx";
import AddGamePage from "../components/AddGamePage.jsx";
import Cards from "../components/Cards.jsx";
import Mentors from "../components/Aboutus.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/about", element: <Mentors /> },
      { path: "/TournamentPage", element: <TournamentPage /> },
      { path: "/:gameName", element: <VideoList /> },
      { path: "/addgame", element: <AddGamePage /> },
      {
        path: "/admin",
        element: (
          <>
            <SignedIn>
              <AdminPage />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
      },
      {
        path: "/sign-in/*",
        element: (
          <div className="flex justify-center items-center p-12">
            <SignIn routing="path" path="/sign-in" />
          </div>
        ),
      },
      {
        path: "/sign-up/*",
        element: <SignUp routing="path" path="/sign-up" />,
      },
    ],
  },
]);
