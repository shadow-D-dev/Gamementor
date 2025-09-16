import { TournamentsCarouselData } from "./CarouselData";
import HeroCardData from "./HeroCardData";
import LeftCardComp from "./LeftCardComp";
import CarouselComp from "./CarouselComp";
const Tournaments = () => {
  return (
    <div className="flex flex-row items-center  mt-44 gap-10 mb-96">
      {/* Header Section (Left Side) */}
      <div className="w-1/2 flex flex-col  p-4 rounded-xl">
        <LeftCardComp {...HeroCardData.TournamentsPage} />
      </div>
      {/* --- Game Cards Carousel (Right Side) --- */}
      <div className="relative w-1/2">
        <CarouselComp carouselData={TournamentsCarouselData} />
      </div>
    </div>
  );
};
export default Tournaments;
