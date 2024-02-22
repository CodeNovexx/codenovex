import Logo from "../assets/logo.png";
import FbIcon from "../assets/facebook_icon.png";
import LinkedinIcon from "../assets/linkedin_icon.png";
import InstagramIcon from "../assets/instagram_icon.png";

export const Footer = () => {
  return (
    <div className="bg-white p-12 flex flex-col gap-4 items-center mt-28">
      <img src={Logo} alt="Logo" />
      <p className="text-center text-base">
        Innovate, Code, Elevate: Crafting Tomorrow's Solutions Today.
      </p>
      <div className="flex gap-2 items-center">
        <img src={FbIcon} alt="" className="w-10 h-10" />
        <img src={LinkedinIcon} alt="" className="w-10 h-10" />
        <img src={InstagramIcon} alt="" className="w-10 h-10" />
      </div>
    </div>
  );
};
