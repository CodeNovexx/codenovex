import React from "react";
import Logo from "../assets/logo.png";
import FbIcon from "../assets/fb_icon.svg";
import LinkedinIcon from "../assets/linkedin_icon.svg";
import InstagramIcon from "../assets/instagram_icon.svg";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="bg-white p-12 flex flex-col gap-4 items-center mt-28"
      ref={ref}
    >
      <img src={Logo} alt="Logo" />
      <p className="text-center text-xl w-[310px]">
        Innovate, Code, Elevate: Crafting Tomorrow's Solutions Today.
      </p>
      <div className="flex gap-5 items-center">
        <img src={FbIcon} alt="" className="w-10 h-10" />
        <img src={LinkedinIcon} alt="" className="w-10 h-10" />
        <img src={InstagramIcon} alt="" className="w-10 h-10" />
      </div>
    </div>
  );
});
