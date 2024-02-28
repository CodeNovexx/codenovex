import React from "react";
import Logo from "../assets/logo.png";
import FbIcon from "../assets/fb_icon.svg";
import LinkedinIcon from "../assets/linkedin_icon.svg";
import InstagramIcon from "../assets/instagram_icon.svg";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="bg-white py-12 flex flex-col gap-4 items-center mt-28 rounded-lg md:mt-0"
      ref={ref}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-36 h-36 self-center md:w-40 md:h-40"
      />
      <p className="text-center text-xl md:text-2xl md:w-[600px]">
        Innovate, Code, Elevate: Crafting Tomorrow's Solutions Today.
      </p>

      <div className="flex flex-col gap-3 items-center text-xl font-sans text-gray-700 mb-7 md:text-2xl">
        <a href="mailto: info@codenovex.ge">
          Email: <span className="font-bold">info@codenovex.ge</span>
        </a>
        <a href="tel:555 05 00 01">
          Phone: <span className="font-bold"> 555 05 00 01</span>
        </a>
      </div>

      <div className="flex gap-5 items-start">
        <a href="https://www.facebook.com/CodeNovex" target="_blank">
          <img src={FbIcon} alt="" className="w-10 h-10 md:w-12 md:h-12" />
        </a>
        <a href="" target="_blank">
          <img
            src={LinkedinIcon}
            alt=""
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
        <a href="" target="_blank">
          <img
            src={InstagramIcon}
            alt=""
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </a>
      </div>
    </div>
  );
});
