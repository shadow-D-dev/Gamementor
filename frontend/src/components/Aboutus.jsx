import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MentorsData } from "./MentorsData";
import { Navigate } from "react-router-dom";
import HomeCards from "./HomeCards";
const Mentors = () => {
  const handleCardClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };
  return (
    <div className="flex justify-between items-center gap-4">
      <AnimatePresence initial={false}>
        {MentorsData.map((game, i) => {
          return (
            <motion.div
              key={game.title}
              initial={{ opacity: 0 }}
              className=" cursor-pointer  w-[60%] pt-12 "
              onClick={() => handleCardClick(game.title)}
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
  );
};
export default Mentors;
