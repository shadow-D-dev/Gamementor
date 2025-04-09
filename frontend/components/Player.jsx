import React, { useEffect, useState } from "react";
import axios from "axios";

const player = ({ gameName }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos/${gameName}`).then((res) => {
      setVideos(res.data);
    });
  }, [gameName]);

  return (
    <div className="video-container">
      {videos.map((vid) => (
        <div key={vid._id} className="video-card">
          <iframe
            width="300"
            height="200"
            src={vid.link.replace("youtu.be/", "www.youtube.com/embed/")}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};
export default player;
