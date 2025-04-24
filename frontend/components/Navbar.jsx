
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useClerk } from "@clerk/clerk-react"; // Clerk hook import for logout
import logo from "../src/assets/logo.png";
import { toast, ToastContainer } from 'react-toastify';  // Importing toastify
import 'react-toastify/dist/ReactToastify.css'; 

const Navbar = () => {
  const { user, signOut, isSignedIn } = useClerk(); // Use Clerk's useClerk hook to access signOut method and user data
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = async () => {
    console.log("Logging out..."); // Check if this is being triggered
    await signOut();  // Ensure the signOut process is complete
    toast.success("You have logged out successfully!");  // Show toast after signOut
  };

  // Add an effect that only triggers the toast after the logout
  useEffect(() => {
    if (!isSignedIn) {
      toast.success("You have logged out successfully!");  // If the user is logged out, show the toast
    }
  }, [isSignedIn]); // Dependency on `isSignedIn` will re-run this when user signs out

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo" style={{ height: "30px", width: "auto" }} />
          <span className="text-white fw-bold">Game Mentor</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TournamentPage">
              Tournament Pages
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://discord.gg/mXWSUzad"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                  alt="Discord"
                  className="img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
              </a>
            </li>

           
            {isSignedIn ? (
              <>
                <li className="nav-item">
                  {/* Display user's name */}
                  <span className="nav-link text-light" style={{ fontWeight: "bold" }}>
                    Welcome, {user.firstName || "User"}!
                  </span>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <ToastContainer /> {/* ToastContainer for displaying toasts */}
    </nav>
  );
};

export default Navbar;

