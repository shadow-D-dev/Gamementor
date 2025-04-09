import React, { useEffect, useState } from "react";
import GameCard from "./Cards";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

// images
import pubgImg from './image/bgmi.png';
import brawlImg from './image/brawl.png';
import csgoImg from './image/csgo.png';
import cocImg from './image/coc.png';
import valorantImg from './image/valo.png';

export const gameCards = [
  {
    title: "valorant",
    image: valorantImg,
    description: "Sharpshooters ka ultimate battlefield! Valorant ek 5v5 tactical shooter hai jisme aim, strategy aur teamwork sab kuch hai. Agents ke unique abilities ke saath har round ek naya challenge ban jaata hai. Chalo seekhte hain top-tier gameplay aur ban jao Radiant!",
    api: "https://gamementor.onrender.com/api/valorant"
    // api: "http://localhost:5000/api/valorant"


  },
  {
    title: "pubg",
    image: pubgImg,
    description: "Survival ka asli test! BGMI (ya PUBG Mobile) ek battle royale game hai jahan 100 players ek island par land karte hain – sirf ek hi winner banta hai. Loot, shoot aur survive karo – hum sikhaenge har zone mein master kaise banein.",
    api: "https://gamementor.onrender.com/api/PUBG"
    // api: "http://localhost:5000/api/PUBG"
  },
  {
    title: "csgo",
    image: csgoImg,
    description: "The OG tactical shooter! CS:GO ek legendary FPS hai jahan precision aur reflexes matter karte hain. CT vs T – har map, har clutch moment mein skill dikhani hoti hai. Let’s break down pro-level plays aur banaye tumhe ek clutch god.",
    api: "https://gamementor.onrender.com/api/CSGO"
    // api: "http://localhost:5000/api/CSGO"
  },
  {
    title: "coc",
    image: cocImg,
    description: "Build. Raid. Conquer. Apna khud ka base banao, troops train karo aur doosre players ke villages par attack karo. CoC mein smart base design aur attack strategies hi tumhe top clan tak le jaayengi. Yahaan har warrior banega mastermind!",
    api: "https://gamementor.onrender.com/api/COC"
    // api: "http://localhost:5000/api/COC"
  },
  {
    title: "brawlstar",
    image: brawlImg,
    description: "Fast-paced action, cartoon-style mayhem! Brawl Stars ek 3v3 arcade shooter hai jisme multiple game modes aur unique brawlers hote hain. Quick matches, intense fights aur fun gameplay ka perfect combo. Aao sikhein best brawlers aur winning strategies.",
    api: "https://gamementor.onrender.com/api/brawlstart"
    // api: "http://localhost:5000/api/brawlstart"
  }
];

const Home = () => {
  const { gameName } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);
  const navigate = useNavigate();

  const selectedGame = gameCards.find(
    (game) => game.title.toLowerCase() === gameName?.toLowerCase()
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedGame?.api) return;

      try {
        const res = await axios.get(selectedGame.api);
        setVideoList(res.data);
        setSelectVideo(null); // reset selected video on game change
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [gameName]);

  const handleCardClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };

  return (
    <div className="container">
      {/* Game Cards */}
      <div className="row justify-content-center my-3">
        {gameCards.map((video, index) => (
          <div
            key={index}
            className="col-sm-6 col-md-4 col-lg-3 mb-4"
            onClick={() => handleCardClick(video.title)}
            style={{ cursor: "pointer" }}
          >
            <GameCard
              title={video.title}
              description={video.description}
              image={video.image}
            />
          </div>
        ))}
      </div>

      {/* Video List & Player */}
      {gameName && selectedGame && (
        <>
          <div className="text-center my-3">
            <h5>Video List for {gameName.toUpperCase()}</h5>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <ul className="list-group">
                {videoList.map((video, index) => {
                  const videoId = video?.link?.split("youtu.be/")[1]?.split("?")[0];
                  return (
                    <li
                      key={index}
                      className={`list-group-item text-center shadow-sm mb-2 rounded ${selectVideo?._id === video._id ? "active" : ""}`}
                      onClick={() => setSelectVideo(video)}
                      style={{ cursor: "pointer" }}
                    >
                      Video {index + 1} - {videoId}
                    </li>
                  );
                })}
              </ul>
            </div>

            {selectVideo && (
              <div className="col-md-8 mt-3 mt-md-0">
                <div className="ratio ratio-16x9 shadow-sm">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectVideo.link.split("youtu.be/")[1]?.split("?")[0]}`}
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
