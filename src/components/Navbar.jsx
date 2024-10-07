import logo from "../assets/logo.png"; 
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="mx-2 w-20 h-10 transition-transform transform hover:scale-110" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ahmed-lahbabi-7642b2203/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white-600 transition-colors duration-300 hover:text-blue-600 hover:scale-125" />
        </a>
        <a href="https://github.com/ahmed098762478" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white-600 transition-colors duration-300 hover:text-blue-600 hover:scale-125" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
