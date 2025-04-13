import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gameCardsData } from "./Home";

const VideoList = () => {
  const { gameName } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  const selectedGame = gameCardsData.find(
    (game) => game.title.toLowerCase() === gameName?.toLowerCase()
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
        console.log("Failed to fetch videos", err);
      }
    };

    fetchData();
  }, [gameName]);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5 text-uppercase">
        {gameName} Videos
      </h2>

      <div className="row">
        {/* Left Panel - Video List */}
        <div className="col-lg-4 mb-4">
          <div className="list-group shadow-sm rounded-3">
            {videoList.map((video, index) => {
              const videoId = video?.link?.split("youtu.be/")[1]?.split("?")[0];

              return (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action py-3 text-center fw-semibold ${
                    selectVideo?._id === video._id ? "active" : ""
                  }`}
                  onClick={() => setSelectVideo(video)}
                >
                  🎮 Video {index + 1} - {videoId}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel - Video Preview */}
        <div className="col-lg-8 d-flex justify-content-center align-items-center">
          {selectVideo ? (
            <div className="ratio ratio-16x9 w-100 shadow-lg rounded-4 border border-secondary-subtle">
              <iframe
                src={`https://www.youtube.com/embed/${selectVideo.link.split("youtu.be/")[1]?.split("?")[0]}`}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="text-muted text-center w-100 py-5 fs-5">
              कोई वीडियो सेलेक्ट करें देखने के लिए
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
