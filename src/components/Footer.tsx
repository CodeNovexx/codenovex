import React from "react";
import Logo from "../assets/logo.png";
import FbIcon from "../assets/fb_icon.svg";
import LinkedinIcon from "../assets/linkedin_icon.svg";
import InstagramIcon from "../assets/instagram_icon.svg";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="bg-white py-12 flex flex-col gap-4 items-center mt-28 rounded-lg"
      ref={ref}
    >
      <img src={Logo} alt="Logo" className="w-36 h-36 self-center" />
      <p className="text-center text-xl">
        Innovate, Code, Elevate: Crafting Tomorrow's Solutions Today.
      </p>

      <div className="text-xl font-sans text-gray-700 mb-7">
        <a href="mailto: info@codenovex.ge">
          Email: <span className="font-bold">info@codenovex.ge</span>
        </a>
      </div>

      <div className="flex gap-5 items-start">
        <a href="" target="_blank">
          <img src={FbIcon} alt="" className="w-10 h-10" />
        </a>
        <a href="" target="_blank">
          <img src={LinkedinIcon} alt="" className="w-10 h-10" />
        </a>
        <a href="" target="_blank">
          <img src={InstagramIcon} alt="" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
});
