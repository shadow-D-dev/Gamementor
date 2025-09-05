import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gameCardsData } from "./GameCardDataComp";
import ReactPlayer from "react-player";

const extractYouTubeId = (url) => {
  const regex = /(?:youtu\.be\/|v=)([^&?/]+)/;
  const match = url.match(regex);
  return match?.[1] || null;
};

const VideoList = () => {
  const { gameName } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  const selectedGame = gameCardsData.find(
    (game) => game.title.toLowerCase() === gameName?.toLowerCase(),
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedGame?.api) return;
      try {
        const res = await fetch(selectedGame.api);
        const data = await res.json();
        setVideoList(data);
        setSelectVideo(null);
      } catch (err) {
        console.error("Failed to fetch videos", err);
      }
    };

    fetchData();
  }, [selectedGame.api, gameName]);

  return (
    <div className="px-4 py-10  mx-auto max-w-[1250px]">
      <h2 className="text-center  text-2xl md:text-3xl font-bold mb-8 uppercase bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-orbitron">
        {gameName} Videos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video List */}
        <div className="space-y-3 max-h-[452px] overflow-scroll  rounded-xl p-4 backdrop-blur-sm bg-black/8 shadow-glass">
          {videoList.map((video, index) => {
            const videoId = extractYouTubeId(video?.link);
            return (
              <button
                key={index}
                onClick={() => setSelectVideo(video)}
                className={`w-full py-3 px-4 text-center font-semibold rounded-lg border transition ${
                  selectVideo?._id === video._id
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-800 border-gray-300"
                }`}
              >
                🎮 Video {index + 1} - {videoId}
              </button>
            );
          })}
        </div>

        {/* Video Player */}
        <div className="lg:col-span-2 flex justify-center items-center max-w-[800px]">
          {selectVideo ? (
            <div className="w-full aspect-video rounded-xl border border-gray-300 shadow-lg overflow-hidden">
              <ReactPlayer
                url={`https://youtu.be/${extractYouTubeId(selectVideo.link)}`}
                controls
                width="100%"
                height="100%"
                style={{ borderRadius: "12px" }}
              />
            </div>
          ) : (
            <div className=" text-4xl flex items-center justify-center h-full w-full py-10  backdrop-blur-sm bg-black/8 shadow-glass rounded-3xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-orbitron">
              Select video for watching
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
