import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
export default function RootLayout() {
  return (
    <div>
      <div className="absolute ">
        <img
          src="/gaming.jpg"
          alt="background"
          className="w-screen h-screen bg-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ opacity: [0.1, 0.3, 0.1] }} // cycle between light & dark
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeIn",
          }}
        />
      </div>

      <div className="relative flex justify-center items-center">
        <div className="w-[1250px] min-w-[1250px] max-w-[1250px] ">
          <Navbar />

          <div className="w-full pl-4">
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
