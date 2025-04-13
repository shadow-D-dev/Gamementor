import React, { useEffect, useState } from "react";
import HomeCards from "../components/HomeCards";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

// images
import pubgImg from './image/bgmi.png';
import brawlImg from './image/brawl.png';
import csgoImg from './image/csgo.png';
import cocImg from './image/coc.png';
import valorantImg from './image/valo.png';

// Renamed array to avoid conflict with GameCard component
export const gameCardsData = [
  {
    title: "valorant",
    image: valorantImg,
    description: "Sharpshooters ka ultimate battlefield! Valorant ek 5v5 tactical shooter hai jisme aim, strategy aur teamwork sab kuch hai. Agents ke unique abilities ke saath har round ek naya challenge ban jaata hai. Chalo seekhte hain top-tier gameplay aur ban jao Radiant!",
    // api: "http://localhost:5000/api/valorant"
    api: "https://gamementor.onrender.com/api/valorant"
  },
  {
    title: "pubg",
    image: pubgImg,
    description: "Survival ka asli test! BGMI (ya PUBG Mobile) ek battle royale game hai jahan 100 players ek island par land karte hain – sirf ek hi winner banta hai. Loot, shoot aur survive karo – hum sikhaenge har zone mein master kaise banein.",
    // api: "http://localhost:5000/api/PUBG"
    api: "https://gamementor.onrender.com/api/PUBG"

  },
  {
    title: "csgo",
    image: csgoImg,
    description: "The OG tactical shooter! CS:GO ek legendary FPS hai jahan precision aur reflexes matter karte hain. CT vs T – har map, har clutch moment mein skill dikhani hoti hai. Let’s break down pro-level plays aur banaye tumhe ek clutch god.",
    // api: "http://localhost:5000/api/CSGO"
    api: "https://gamementor.onrender.com/api/CSGO"

  },
  {
    title: "coc",
    image: cocImg,
    description: "Build. Raid. Conquer. Apna khud ka base banao, troops train karo aur doosre players ke villages par attack karo. CoC mein smart base design aur attack strategies hi tumhe top clan tak le jaayengi. Yahaan har warrior banega mastermind!",
    // api: "http://localhost:5000/api/COC"
    api: "https://gamementor.onrender.com/api/COC"

  },
  {
    title: "brawlstar",
    image: brawlImg,
    description: "Fast-paced action, cartoon-style mayhem! Brawl Stars ek 3v3 arcade shooter hai jisme multiple game modes aur unique brawlers hote hain. Quick matches, intense fights aur fun gameplay ka perfect combo. Aao sikhein best brawlers aur winning strategies.",
    // api: "http://localhost:5000/api/brawlstart"
    api: "https://gamementor.onrender.com/api/brawlstart"

  }
];

const Home = () => {
  const { gameName } = useParams();
  const navigate = useNavigate();

  const selectedGame = gameCardsData.find(
    (game) => game.title.toLowerCase() === gameName?.toLowerCase()
  );

  // State to manage video list and selected video
  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedGame?.api) return;

      try {
        const res = await axios.get(selectedGame.api);
        setVideoList(res.data); // Set video list from API response
        setSelectVideo(null); // Reset selected video on game change
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [gameName, selectedGame]);

  const handleCardClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };

  return (
    <div className="container">
      <h1>Game Descriptions</h1>
      <div className="row justify-content-center my-3">
        {gameCardsData.map((game, index) => (
          <div
            key={index}
            className="col-sm-6 col-md-4 col-lg-3 mb-4"
            onClick={() => handleCardClick(game.title)}
            style={{ cursor: "pointer" }}
          >
            <HomeCards
              title={game.title}
              description={game.description}
              image={game.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
