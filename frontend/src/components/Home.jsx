import React, { useEffect, useState } from "react";
import HomeCards from "../components/HomeCards";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import addgame from "../assets/addgame.jpg";
import { gameCardsData } from "./GameCardDataComp";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LeftCardComp from "./LeftCardComp";
import pagecarddata from "./PageCardData";

const Home = () => {
  const { gameName } = useParams();
  const navigate = useNavigate();
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

  const handleCardClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };

  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % carouselData.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));

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
        <div className="relative h-full flex justify-between items-start">
          <button
            onClick={prev}
            className="bg-white/70 p-3 rounded-full text-white hover:bg-gray-200"
          >
            <ChevronLeft size={12} className="text-white" />
          </button>

          <div className="flex justify-center items-center">
            <AnimatePresence initial={false}>
              {carouselData.map((game, i) => {
                let offset =
                  (i - index + carouselData.length) % carouselData.length;
                if (offset > carouselData.length / 2) {
                  offset -= carouselData.length;
                }

                if (Math.abs(offset) > 1) return null;

                return (
                  <motion.div
                    key={game.title}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: offset * 70,
                      scale: offset === 0 ? 1 : 0.85,
                      zIndex: offset === 0 ? 10 : 5,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "ease", stiffness: 100, damping: 15 }}
                    className="absolute cursor-pointer w-[60%] pt-12"
                    onClick={() =>
                      game.isAddCard
                        ? navigate("/addgame")
                        : handleCardClick(game.title)
                    }
                  >
                    <HomeCards
                      title={game.title}
                      description={game.description}
                      image={game.image}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="bg-white/70 p-3 rounded-full text-white hover:bg-gray-200"
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
