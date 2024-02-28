import { useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import Logo from "../assets/logo.png";
import CloseIcon from "../assets/closeIcon.png";
import {
  DropdownContentProps,
  HeaderContentProps,
  HeaderProps,
} from "../types/header";
import DownArrow from "../assets/white-down-arrow.png";

const Header = ({ aboutRef, teamRef, servicesRef, footerRef }: HeaderProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const scrollToRef = (refName: string) => {
    let targetRef;

    switch (refName) {
      case "about":
        targetRef = aboutRef;
        break;
      case "team":
        targetRef = teamRef;
        break;
      case "services":
        targetRef = servicesRef;
        break;
      case "contact":
        targetRef = footerRef;
        break;
      default:
        targetRef = null;
    }

    if (targetRef && targetRef.current) {
      const targetPosition =
        targetRef.current.getBoundingClientRect().top + window.scrollY + 400;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      closeDropdown();
    }
  };

  return (
    <header>
      {isDropdownVisible ? (
        <DropdownContent
          closeDropdown={closeDropdown}
          scrollToRef={scrollToRef}
        />
      ) : (
        <HeaderContent toggleDropdown={toggleDropdown} scrollToRef={scrollToRef} />
      )}
    </header>
  );
};

const HeaderContent = ({ toggleDropdown, scrollToRef }: HeaderContentProps) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <section className="header_background flex flex-col gap-48 max-w-[1130px] mx-auto">
      <div className="flex justify-between items-center px-5 pt-5 md:hidden">
        <div
          className="bg-white rounded-full p-4 w-11 h-11 flex items-center justify-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img src={HamburgerIcon} alt="hamburger_icon" />
        </div>
        <div>
          <img src={Logo} className="w-11 h-11 rounded-full " alt="logo" />
        </div>
      </div>

      <div className="hidden md:flex justify-between p-7 lg:p-9">
      <div>
          <img src={Logo} className="w-20 h-20 rounded-full " alt="logo" />
        </div>

        <div className="flex gap-4 items-center justify-center bg-white p-6 rounded-full text-gray-500">
          <p onClick={() => scrollToRef("home")} className="cursor-pointer">HOME</p>
          <p onClick={() => scrollToRef("about")} className="cursor-pointer">ABOUT</p>
          <p onClick={() => scrollToRef("team")} className="cursor-pointer">TEAM</p>
          <p onClick={() => scrollToRef("services")} className="cursor-pointer">SERVICES</p>
        </div>

        <button className="bg-[#3A556D] rounded-full w-auto p-3 text-white text-lg" onClick={() => scrollToRef("contact")}>Contact</button>
      </div>

      <div className=" text-white flex flex-col gap-14 items-center  justify-center">
        <h1 className="text-5xl">CodeNovex</h1>
        <div className="flex flex-col gap-5 text-3xl items-center">
          <p>BUILDING</p>
          <p>SUCCESS</p>
          <p>TOGETHER</p>
        </div>

        <div
          className="mt-10 flex flex-col gap-3 items-center justify-center cursor-pointer"
          onClick={handleScroll}
        >
          <img src={DownArrow} alt="down_arrow" className="w-10 h-10" />
          <h1 className="text-2xl">Scroll</h1>
        </div>
      </div>
    </section>
  );
};

const DropdownContent = ({
  closeDropdown,
  scrollToRef,
}: DropdownContentProps) => (
  <div className="w-full h-auto rounded-lg p-10 bg-white flex flex-col gap-20">
    <div className="flex justify-between items-center">
      <img
        src={CloseIcon}
        alt="close_icon"
        className="w-7 h-7 cursor-pointer"
        onClick={closeDropdown}
      />
      <h1 className="text-3xl font-extrabold">CodeNovex</h1>
    </div>
    <div className="flex flex-col gap-10 text-2xl font-bold items-center">
      <p className="cursor-pointer" onClick={() => scrollToRef("home")}>
        HOME
      </p>
      <p className="cursor-pointer" onClick={() => scrollToRef("about")}>
        ABOUT
      </p>
      <p className="cursor-pointer" onClick={() => scrollToRef("team")}>
        TEAM
      </p>
      <p className="cursor-pointer" onClick={() => scrollToRef("services")}>
        SERVICES
      </p>
      <p className="cursor-pointer" onClick={() => scrollToRef("contact")}>
        CONTACT
      </p>
    </div>
  </div>
);

export default Header;
