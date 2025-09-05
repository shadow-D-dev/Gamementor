const HomeCards = ({ title, description, image }) => {
  return (
    <div className="h-full backdrop-blur-xl  bg-black/2 rounded-2xl  transition-transform duration-300 transform hover:scale-110 hover:shadow-xl flex flex-col justify-between shadow-glass hover:shadow-glass-pressed">
      {/* Image Wrapper */}
      <img
        src={image}
        alt={title}
        className=" object-cover transition-transform duration-300 transform group-hover:scale-125 h-[360px] w-full overflow-hidden rounded-xl  shadow-glass hover:shadow-glass-pressed max-h-[350px] content-stretch min-h-[350px]"
      />
      {/* Text Content */}
      <h5 className="text-3xl  font-semibold capitalize  bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-center font-orbitron pt-2">
        {title.toUpperCase()}
      </h5>

      {description && (
        <div className="pb-6">
          <p
            className="text-gray-200 text-lg overflow-hidden px-4 "
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeCards;
