// import { Routes, Route } from "react-router-dom";
// import {
//   SignIn,
//   SignUp,
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
// } from "@clerk/clerk-react";
//
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/Aboutus";
// import TournamentPage from "./components/TournamentPage";
// import VideoList from "./components/VideoList";
// import AdminPage from "./components/AdminPage";
// import AddGamePage from "./components/AddGamePage";
//
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="mt-4 bg-gradient-to-r from-[#1a093e] to-[#0b032d]">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/TournamentPage" element={<TournamentPage />} />
//           <Route path="/:gameName" element={<VideoList />} />
//           <Route path="/addgame" element={<AddGamePage />} />
//
//           <Route
//             path="/admin"
//             element={
//               <>
//                 <SignedIn>
//                   <AdminPage />
//                 </SignedIn>
//                 <SignedOut>
//                   <RedirectToSignIn />
//                 </SignedOut>
//               </>
//             }
//           />
//
//           <Route
//             path="/sign-in/*"
//             element={<SignIn routing="path" path="/sign-in" />}
//           />
//           <Route
//             path="/sign-up/*"
//             element={<SignUp routing="path" path="/sign-up" />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }
//
// export default App;
