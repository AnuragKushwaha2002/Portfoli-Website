import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { LampDemo } from "./ui/lamp";

const Footer = () => {
  return (
    <footer className="w-full  pb-4 pt-10 mt-32 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <LampDemo />

      
    </footer>
  );
};

export default Footer;
