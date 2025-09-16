import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import addgame from "../assets/addgame.jpg";
import { gameCardsData } from "./GameCardDataComp";
import LeftCardComp from "./LeftCardComp";
import pagecarddata from "./PageCardData";
import CarouselComp from "./CarouselComp";
import { motion } from "framer-motion";
import SlideRightIn from "./animations/SlideRightIn";
import SlideLeftIn from "./animations/SlideLeftIn";
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
    <div className="flex flex-col md:flex-row items-center justify-between  gap-10">
      {/* Header Section (Left Side) */}
      <div className="w-1/2 flex flex-col  p-4 rounded-xl">
        {/* <SlideRightIn> */}
        <LeftCardComp {...pagecarddata.Homepage} />
        {/* </SlideRightIn> */}
      </div>
      {/* --- Game Cards Carousel (Right Side) --- */}
      <div className="relative w-1/2">
        <CarouselComp carouselData={carouselData} />
      </div>
    </div>
  );
};

export default Home;
