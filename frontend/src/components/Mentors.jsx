import { MentorsCarouselData } from "./CarouselData";
import HeroCardData from "./HeroCardData";
import LeftCardComp from "./LeftCardComp";
import CarouselComp from "./CarouselComp";
const Mentors = () => {
  return (
    <div className="flex flex-row items-center  mt-44 gap-10 mb-96">
      {/* Header Section (Left Side) */}
      <div className="w-1/2 flex flex-col  p-4 rounded-xl">
        <LeftCardComp {...HeroCardData.MentorPage} />
      </div>
      {/* --- Game Cards Carousel (Right Side) --- */}
      <div className="relative w-1/2">
        <CarouselComp carouselData={MentorsCarouselData} />
      </div>
    </div>
  );
};
export default Mentors;
