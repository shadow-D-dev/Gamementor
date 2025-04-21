// App.jsx
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/Aboutus';
import Contact from '../components/Contact';
import VideoList from "../components/VideoList";
import AdminPage from '../components/AdminPage';  // ← ये तुम बना सकते हो

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:gameName" element={<VideoList />} />

          {/* 🛡️ Protected Admin Route */}
          <Route
            path="/admin"
            element={
              <>
                <SignedIn>
                  <AdminPage/>
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          {/* Clerk Auth Routes */}
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
