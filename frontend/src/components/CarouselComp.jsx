import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeCards from "./HomeCards";
function CarouselComp({ carouselData }) {
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % carouselData.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  return (
    <div className="relative h-full flex justify-between items-start">
      <button
        onClick={prev}
        className="bg-white/70 p-3 rounded-full text-white hover:bg-gray-200"
      >
        <ChevronLeft size={12} className="text-white" />
      </button>

      <div className="flex justify-center items-center">
        <AnimatePresence initial={false}>
          {carouselData.map((game, i) => {
            let offset =
              (i - index + carouselData.length) % carouselData.length;
            if (offset > carouselData.length / 2) {
              offset -= carouselData.length;
            }

            if (Math.abs(offset) > 1) return null;

            return (
              <motion.div
                key={game.title}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: offset * 70,
                  scale: offset === 0 ? 1 : 0.85,
                  zIndex: offset === 0 ? 10 : 5,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "ease", stiffness: 100, damping: 15 }}
                className="absolute cursor-pointer w-[60%] pt-12"
                onClick={() =>
                  game.isAddCard
                    ? navigate("/addgame")
                    : handleCardClick(game.title)
                }
              >
                <HomeCards
                  title={game.title}
                  description={game.description}
                  image={game.image}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <button
        onClick={next}
        className="bg-white/70 p-3 rounded-full text-white hover:bg-gray-200"
      >
        <ChevronRight size={12} />
      </button>
    </div>
  );
}

export default CarouselComp;
