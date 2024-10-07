import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/ahmed.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl mb-16">
              Ahmed Lahbabi
            </h1>
            <span className="bg-gradient-to-r from-gray-500 to-white bg-clip-text text-4xl tracking-tight text-transparent mb-6">
            full stack Java developer
            </span>
            <p className="text-lg">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <img src={profilepic} alt="Ahmed Lahbabi" className="w-80 h-80 lg:w-96 lg:h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
