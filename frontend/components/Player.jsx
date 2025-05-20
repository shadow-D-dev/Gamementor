import React, { useEffect, useState } from "react";
import axios from "axios";

const Player = ({ gameName }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos/${gameName}`).then((res) => {
      setVideos(res.data);
    });
  }, [gameName]);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {videos.map((vid) => (
        <div
          key={vid._id}
          className="aspect-video w-full max-w-sm mx-auto rounded overflow-hidden shadow"
        >
          <iframe
            className="w-full h-full"
            src={vid.link.replace("youtu.be/", "www.youtube.com/embed/")}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    // <div className="video-container">
    //   {videos.map((vid) => (
    //     <div key={vid._id} className="video-card">
    //       <iframe
    //         width="300"
    //         height="200"
    //         src={vid.link.replace("youtu.be/", "www.youtube.com/embed/")}
    //         title="YouTube video player"
    //         allowFullScreen
    //       ></iframe>
    //     </div>
    //   ))}
    // </div>
  );
};
export default Player;
