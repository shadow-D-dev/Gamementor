import { MentorsData } from "./MentorsData";
import pagecarddata from "./PageCardData";
import LeftCardComp from "./LeftCardComp";
import CarouselComp from "./CarouselComp";
const Mentors = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-44 gap-10 mb-96">
      {/* Header Section (Left Side) */}
      <div className="w-1/2 flex flex-col  p-4 rounded-xl">
        <LeftCardComp {...pagecarddata.MentorPage} />
      </div>
      {/* --- Game Cards Carousel (Right Side) --- */}
      <div className="relative w-1/2 h-full">
        <CarouselComp carouselData={MentorsData} />
      </div>
    </div>
  );
};
export default Mentors;
