// const Aboutus = () => {
//   return (
//     <div className="container mx-auto px-4 mr-5 mt-4">
//       <h1 className="text-center text-3xl font-bold mb-6">About Us</h1>
//       <div className="space-y-6">
//         <h2 className="text-center text-2xl font-semibold mb-4">
//           Welcome to Game Mentor
//         </h2>
//         <p className="text-lg leading-relaxed">
//           Game Mentor is the ultimate platform where gamers can learn pro-level
//           skills for their favorite games! Whether you're looking to become a
//           sharp shooter in FPS games, achieve top ranks in Battle Royale, or
//           master strategy games – with our expert tutorials, tips, and tricks,
//           mastering every game has never been easier.
//         </p>
//         <p className="text-lg leading-relaxed">
//           At Game Mentor, we provide high-quality video guides, gameplay
//           strategies, and up-to-date content to help players take their gaming
//           journey to the next level. If you're ready to boost your gaming skills
//           and climb the global leaderboards, Game Mentor is your perfect guide!
//         </p>
//         <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
//         <ul className="list-disc list-inside space-y-3">
//           <li>
//             <strong>In-Depth Game Guides:</strong> Our detailed video tutorials
//             teach you the best strategies for every game.
//           </li>
//           <li>
//             <strong>Popular Games:</strong> Focus on games like Valorant, PUBG,
//             CS:GO, Brawl Stars, and Clash of Clans.
//           </li>
//           <li>
//             <strong>Pro Tips & Tricks:</strong> Expert insights and gameplay
//             tips that will make you unbeatable in every match.
//           </li>
//           <li>
//             <strong>Community Support:</strong> Join an active gaming community
//             on platforms like Discord.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
//
// export default Aboutus;
//

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gameCardsData } from "./MentorsData";
import { Navigate } from "react-router-dom";
import HomeCards from "./HomeCards";
const Mentors = () => {
  const handleCardClick = (title) => {
    navigate(`/${title.toLowerCase()}`);
  };
  return (
    <div className="flex justify-between items-center gap-4">
      <AnimatePresence initial={false}>
        {gameCardsData.map((game, i) => {
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
