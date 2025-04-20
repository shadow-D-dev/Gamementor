import React from "react";

const HomeCards = ({ title, description, image }) => {
  return (
    <div 
         className="card shadow d-flex flex-column justify-content-between transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
      style={{
        width: "100%",
        minWidth: "200px",
        maxWidth: "250px",
        margin: "0 auto",
        height: "310px",
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          height: "160px",
          objectFit: "cover",
        }}
      />
      <div
        className="card-body text-center d-flex flex-column justify-content-between"
        style={{ overflow: "hidden" }}
      >
        <h5 className="card-title text-capitalize">{title}</h5>
        {description && (
          <p
            className="card-text text-muted"
            style={{
              fontSize: "0.85rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4, // ✨ limits to 4 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeCards;
