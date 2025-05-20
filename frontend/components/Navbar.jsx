import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useClerk } from "@clerk/clerk-react"; // Clerk hook import for logout
import logo from "../src/assets/logo.png";
import { toast, ToastContainer } from "react-toastify"; // Importing toastify
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, signOut, isSignedIn } = useClerk(); // Use Clerk's useClerk hook to access signOut method and user data
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = async () => {
    console.log("Logging out..."); // Check if this is being triggered
    await signOut(); // Ensure the signOut process is complete
    toast.success("You have logged out successfully!"); // Show toast after signOut
  };

  // Add an effect that only triggers the toast after the logout
  useEffect(() => {
    if (!isSignedIn) {
      toast.success("You have logged out successfully!"); // If the user is logged out, show the toast
    }
  }, [isSignedIn]); // Dependency on `isSignedIn` will re-run this when user signs out

  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-7 w-auto" />
          <span className="font-bold text-white text-lg">Game Mentor</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
              }
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isCollapsed ? "hidden" : "block"
          } mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/TournamentPage" className="hover:text-blue-400">
                Tournament Pages
              </Link>
            </li>
            <li>
              <a
                href="https://discord.gg/mXWSUzad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                  alt="Discord"
                  className="w-5 h-5"
                />
              </a>
            </li>

            {isSignedIn ? (
              <>
                <li>
                  <span className="font-bold">
                    Welcome, {user.firstName || "User"}!
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/admin" className="hover:text-blue-400">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <ToastContainer />
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
    //       <img src={logo} alt="Logo" style={{ height: "30px", width: "auto" }} />
    //       <span className="text-white fw-bold">Game Mentor</span>
    //     </Link>
    //
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       onClick={toggleNavbar}
    //       aria-controls="navbarNav"
    //       aria-expanded={!isCollapsed}
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //
    //     <div
    //       className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
    //       id="navbarNav"
    //     >
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             About Us
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/TournamentPage">
    //           Tournament Pages
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             href="https://discord.gg/mXWSUzad"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="nav-link"
    //           >
    //             <img
    //               src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
    //               alt="Discord"
    //               className="img-fluid"
    //               style={{ width: "20px", height: "20px" }}
    //             />
    //           </a>
    //         </li>
    //
    //
    //         {isSignedIn ? (
    //           <>
    //             <li className="nav-item">
    //               {/* Display user's name */}
    //               <span className="nav-link text-light" style={{ fontWeight: "bold" }}>
    //                 Welcome, {user.firstName || "User"}!
    //               </span>
    //             </li>
    //             <li className="nav-item">
    //               <button className="nav-link btn btn-danger" onClick={handleLogout}>
    //                 Logout
    //               </button>
    //             </li>
    //           </>
    //         ) : (
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/admin">
    //               Login
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    //
    //   <ToastContainer /> {/* ToastContainer for displaying toasts */}
    // </nav>
  );
};

export default Navbar;
