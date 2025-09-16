import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import addgame from "../assets/addgame.jpg";
import { GamesCarouselData } from "./CarouselData";
import LeftCardComp from "./LeftCardComp";
import HeroCardData from "./HeroCardData";
import CarouselComp from "./CarouselComp";
import SlideRightIn from "./animations/SlideRightIn";
import SlideLeftIn from "./animations/SlideLeftIn";
const Home = () => {
  const { gameName } = useParams();
  const { user } = useClerk();

  const selectedGame = GamesCarouselData.find(
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
    ...GamesCarouselData,
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
  console.log({ ...HeroCardData });

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-44 gap-10 ">
      {/* Header Section (Left Side) */}
      <div className="w-1/2   p-4 rounded-xl ">
        {/* <SlideRightIn> */}
        <LeftCardComp {...HeroCardData.Homepage} />
        {/* </SlideRightIn> */}
      </div>
      {/* --- Game Cards Carousel (Right Side) --- */}
      <div className="relative w-1/2 ">
        {/* <SlideLeftIn> */}
        <CarouselComp carouselData={carouselData} />
        {/* </SlideLeftIn> */}
      </div>
    </div>
  );
};

export default Home;
