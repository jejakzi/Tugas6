import React from "react";
import ReactPlayer from "react-player";

const VideosSection = ({ title, videos }) => {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="px-4 pt-10 md:px-32">
      <h2 className="text-2xl font-bold text-center md:text-start">
        Video terkait {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <ReactPlayer
            key={video.key}
            url={`https://www.youtube.com/watch?v=${video.key}`}
            controls
            width="100%"
            height="228px"
          />
        ))}
      </div>
    </div>
  );
};

export default VideosSection;
