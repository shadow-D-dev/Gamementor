import img from "../assets/bgmi.webp";
export default function Cards() {
  let description =
    "Survival ka asli test! BGMI (ya PUBG Mobile) ek battle royale game hai jahan 100 players ek island par land karte hain – sirf ek hi winner banta hai. Loot, shoot aur survive karo – hum sikhaenge har zone mein master kaise banein.";
  return (
    <div className="flex flex-row items-start justify-between mx-auto px-6 mt-44 gap-10 ">
      <div className="w-1/2 py-8 px-6 rounded-xl text-white border border-white backdrop-blur-2xl flex-1">
        <h3 className="text-cyan-400 font-medium text-xl tracking-widest">
          LEVEL UP YOUR GAME
        </h3>
        <h1 className="font-orbitron text-2xl md:text-6xl font-semibold mb-4 tracking-wide  m-0 p-0">
          Learn & Master BGMI, Valorant, CS & Many more
        </h1>
        <p className="max-w-xl text-gray-300">
          Pro-crafted guides, meta insights, community stats, and active
          tournaments — everything you need to go from casual to pro.
        </p>
        <div className="flex gap-4 mt-4 text-gray-300">
          <button className="border-gray-600 border-1  p-1 rounded-2xl text-xs px-2">
            Guide
          </button>
          <button className="border-gray-600 border-1  p-1 rounded-2xl text-xs px-2">
            Stats
          </button>
          <button className="border-gray-600 border-1  p-1 rounded-2xl text-xs px-2">
            Tournaments
          </button>
          <button className="border-gray-600 border-1  p-1 rounded-2xl text-xs px-2">
            Community
          </button>
        </div>
        <div className="flex gap-4 mt-8">
          <button className="border-1 border-cyan-400 rounded-md text-md bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white p-4 px-8">
            Start Learning
          </button>
          <button className="border-1 border-gray-600 p-4 rounded-md bg-gray-900 px-2">
            Browser Tournaments
          </button>
        </div>

        <p className="text-sm text-gray-300">
          New Guides drop monthly
          <span className="mx-1 text-xl align-middle">•</span>
          No fluff
          <span className="mx-1 text-xl align-middle">•</span>
          Built by top ranked players
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center  border-red-400 border-2 ">
        <div className=" border-4 border-cyan-400 h-[560px] w-[70%]">
          <div className="h-full backdrop-blur-xl border-white/10 border-2 bg-white/10 rounded-2xl shadow-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-xl flex flex-col justify-between ">
            {/* Image Wrapper */}
            <img
              src={img}
              alt="lol"
              className=" object-cover transition-transform duration-300 transform group-hover:scale-125 h-[360px] w-full overflow-hidden rounded-lg  shadow-2xl"
            />

            {/* Text Content */}
            <div className="flex flex-col justify-between  px-4 py-3 overflow-hidden flex-1">
              <h5 className="text-lg text-teal-300 font-semibold capitalize">
                Bgmi
              </h5>

              {description && (
                <p
                  className="text-gray-200 text-sm overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
