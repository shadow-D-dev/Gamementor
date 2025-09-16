function LeftCardComp({
  tagline,
  heading,
  subheading,
  smallButtons,
  largeButtons,
  highlights,
}) {
  return (
    <div className="h-full w-full  p-4 rounded-xl text-white backdrop-blur-2xl shadow-glass flex flex-col gap-3">
      {/* Tagline */}
      <h3 className="text-cyan-400 font-medium text-xl tracking-widest">
        {tagline}
      </h3>

      {/* Main heading */}
      <h1 className="font-orbitron text-2xl md:text-6xl font-semibold mb-4 tracking-wide">
        {heading}
      </h1>

      {/* Subheading */}
      <p className="max-w-xl text-gray-300">{subheading}</p>

      {/* Small buttons */}
      <div className="flex gap-4 text-gray-300">
        {smallButtons.map((btn, idx) => (
          <button
            key={idx}
            className="border-gray-600 border-1 p-1 rounded-2xl text-xs px-2"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Large buttons */}
      <div className="flex gap-4 font-orbitron text-sm">
        <button className="border-1 border-cyan-400 rounded-3xl text-md bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-black p-2 px-8">
          {largeButtons[0]}
        </button>
        <button className="border-1 border-gray-600 p-4 rounded-3xl px-2 bg-gray-800">
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {largeButtons[1]}
          </span>
        </button>
      </div>

      {/* Highlights */}
      <p className="text-sm text-gray-300">
        {highlights.map((point, idx) => (
          <span key={idx}>
            {point}
            {idx < highlights.length - 1 && (
              <span className="mx-1 text-xl align-middle">•</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

export default LeftCardComp;
