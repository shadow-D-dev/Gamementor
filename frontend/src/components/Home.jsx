import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import addgame from "../assets/addgame.jpg";
import { gameCardsData } from "./GameCardDataComp";
import { motion, AnimatePresence } from "framer-motion";
import LeftCardComp from "./LeftCardComp";
import pagecarddata from "./PageCardData";
import CarouselComp from "./CarouselComp";
const Home = () => {
  const { gameName } = useParams();
  const { user } = useClerk();

  const selectedGame = gameCardsData.find(
    (game) => game.title.toLowerCase() === gameName?.toLowerCase(),
  );

  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedGame?.api) return;
      try {
        const res = await axios.get(selectedGame.api);
        setVideoList(res.data);
        setSelectVideo(null);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [gameName, selectedGame]);

  const carouselData = [
    ...gameCardsData,
    ...(user && user.publicMetadata?.role === "admin"
      ? [
          {
            title: "Add New Game",
            description: "Admin only - Add a new game guide",
            image: addgame,
            isAddCard: true,
          },
        ]
      : []),
  ];
  console.log({ ...pagecarddata });
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-44 gap-10 mb-96">
      {/* Header Section (Left Side) */}
      <motion.div className="w-1/2 flex flex-col  p-4 rounded-xl">
        <LeftCardComp {...pagecarddata.Homepage} />
      </motion.div>
      {/* --- Game Cards Carousel (Right Side) --- */}
      <div className="relative w-1/2 h-full">
        <CarouselComp carouselData={carouselData} />
      </div>
    </div>
  );
};

export default Home;
