import profilepic from "../assets/projects/ahmed.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {}
      <h1
        className="my-20 text-center text-4xl"
        data-aos="fade-up" 
        data-aos-duration="1000" 
      >
        About <span className="text-neutral-500">me</span>
      </h1>

      <div className="flex flex-wrap">
        {}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-start"> {}
            <img
              src={profilepic}
              alt="about"
              className="w-90 h-90 lg:w-96 lg:h-96"
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay="300" 
            />
          </div>
        </div>

        {}
        <div className="w-full lg:w-1/2 lg:p-8">
          <p
            className="text-lg"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="200"
          >
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
