import { RefObject, useEffect, useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import Logo from "../assets/logo.png";
import CloseIcon from "../assets/closeIcon.png";
import {
  DropdownContentProps,
  HeaderProps,
  NavItemProps,
} from "../types/header";
import DownArrow from "../assets/white-down-arrow.png";

const Header = ({ aboutRef, teamRef, servicesRef, footerRef }: HeaderProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isDropdownVisible]);
  const scrollToRef = (refName: string) => {
    const refs: { [key: string]: RefObject<HTMLDivElement> } = {
      about: aboutRef,
      team: teamRef,
      services: servicesRef,
      contact: footerRef,
    };

    const targetRef = refs[refName];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
      closeDropdown();
    }
  };

  const handleScroll = (refName: string) => {
    const ref: { [key: string]: RefObject<HTMLDivElement> } = {
      about: aboutRef,
    };

    const targetRef = ref[refName];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className=" text-white flex flex-col w-full max-w-[1130px] mx-auto">
      <div className="flex justify-between items-center py-4 px-6 md:hidden">
        <div
          className="bg-white rounded-full p-4 w-11 h-11 flex items-center justify-center cursor-pointer md:hidden"
          onClick={toggleDropdown}
        >
          <img src={HamburgerIcon} alt="hamburger_icon" />
        </div>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 rounded-full" />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <NavItem onClick={() => scrollToRef("about")}>About</NavItem>
          <NavItem onClick={() => scrollToRef("services")}>Services</NavItem>
          <NavItem onClick={() => scrollToRef("contact")}>Contact</NavItem>
        </nav>
      </div>

      <div className="hidden md:flex justify-between p-7 lg:p-9 ">
        <div>
          <img src={Logo} className="w-20 h-20 rounded-full " alt="logo" />
        </div>

        <div className="flex gap-4 items-center justify-center bg-white p-6 rounded-full text-gray-500">
          <p onClick={() => scrollToRef("home")} className="cursor-pointer">
            HOME
          </p>
          <p onClick={() => scrollToRef("about")} className="cursor-pointer">
            ABOUT
          </p>
          {/* <p onClick={() => scrollToRef("team")} className="cursor-pointer">TEAM</p> */}
          <p onClick={() => scrollToRef("services")} className="cursor-pointer">
            SERVICES
          </p>
        </div>

        <button
          className="bg-[#3A556D] rounded-full w-auto p-3 text-white text-lg"
          onClick={() => scrollToRef("contact")}
        >
          Contact
        </button>
      </div>

      <section className="header_background  mb-20 flex flex-col gap-14 items-center justify-center">
        <h1 className="text-5xl">CodeNovex</h1>
        <div className="flex flex-col gap-4 text-3xl items-center">
          <p>BUILDING</p>
          <p>SUCCESS</p>
          <p>TOGETHER</p>
        </div>
        <div
          className="mt-10 flex flex-col gap-3 items-center justify-center cursor-pointer"
          onClick={() => handleScroll("about")}
        >
          <img src={DownArrow} alt="down_arrow" className="w-10 h-10" />
          <h1 className="text-2xl">Scroll</h1>
        </div>
      </section>
      {isDropdownVisible && (
        <DropdownContent
          scrollToRef={scrollToRef}
          closeDropdown={closeDropdown}
        />
      )}
    </header>
  );
};

const NavItem = ({ children, onClick }: NavItemProps) => {
  return (
    <button
      className="text-black hover:text-gray-300 transition duration-300 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const DropdownContent = ({
  scrollToRef,
  closeDropdown,
}: DropdownContentProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-80 z-[999]">
      <div className="max-w-md mx-auto bg-white rounded-lg p-4">
        <nav className="flex flex-col space-y-8 w-[300px] text-black relative">
          <button className="absolute top-1 right-1" onClick={closeDropdown}>
            <img src={CloseIcon} alt="Close" className="w-4" />
          </button>
          <NavItem onClick={() => scrollToRef("about")}>About</NavItem>
          <NavItem onClick={() => scrollToRef("services")}>Services</NavItem>
          <NavItem onClick={() => scrollToRef("contact")}>Contact</NavItem>
        </nav>
      </div>
    </div>
  );
};

export default Header;
