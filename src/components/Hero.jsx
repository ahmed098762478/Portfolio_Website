import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/ahmed.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {}
            <h1
              className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl mb-16"
              data-aos="fade-up"  
              data-aos-duration="1000" 
              data-aos-delay="100"  
            >
              Ahmed Lahbabi
            </h1>

             {}
            <span
              className="bg-gradient-to-r from-gray-500 to-white bg-clip-text text-4xl tracking-tight text-transparent mb-6"
              data-aos="fade-up"  
              data-aos-duration="1000"  
              data-aos-delay="300"  
            >
              full stack Java developer
            </span>

            {}
            <p
              className="text-lg"
              data-aos="fade-up"  
              data-aos-duration="1000"  
              data-aos-delay="500"  
            >
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <img
              src={profilepic}
              alt="Ahmed Lahbabi"
              className="w-80 h-80 lg:w-96 lg:h-96"
              data-aos="fade-up"  
              data-aos-duration="1000"  
              data-aos-delay="700" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
