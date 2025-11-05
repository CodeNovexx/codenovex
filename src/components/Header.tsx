import { RefObject, useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HamburgerIcon from "../assets/hamburger.webp";
import Logo from "../assets/logo.webp";
import CloseIcon from "../assets/closeIcon.webp";
import {
  DropdownContentProps,
  HeaderProps,
  NavItemProps,
} from "../types/header";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = ({ aboutRef, teamRef, servicesRef, footerRef }: HeaderProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = useCallback(() => {
    setDropdownVisible(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setDropdownVisible(false);
  }, []);

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isDropdownVisible]);
  
  const scrollToRefOnHome = useCallback((refName: string) => {
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
  }, [aboutRef, teamRef, servicesRef, footerRef, closeDropdown]);

  // Handle hash navigation for smooth scrolling
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && location.pathname === '/') {
        setTimeout(() => {
          scrollToRefOnHome(hash);
        }, 100);
      }
    };

    // Handle hash on mount and navigation
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [location.pathname, scrollToRefOnHome]);

  const scrollToRef = useCallback((refName: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToRefOnHome(refName);
      }, 100);
    } else {
      scrollToRefOnHome(refName);
    }
  }, [navigate, location.pathname, scrollToRefOnHome]);

  const handleScroll = useCallback((refName: string) => {
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
  }, [aboutRef]);
  return (
    <header className=" text-white flex flex-col w-full max-w-[1440px] mx-auto">
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
          <NavItem onClick={() => scrollToRef("about")}>
            {t("header.ABOUT")}
          </NavItem>
          <NavItem onClick={() => scrollToRef("services")}>
            {t("header.SERVICES")}
          </NavItem>
          <NavItem onClick={() => scrollToRef("contact")}>
            {t("header.CONTACT")}
          </NavItem>
        </nav>
      </div>

      <div className="hidden md:flex justify-between p-7 lg:p-9 ">
        <div>
          <img src={Logo} className="w-20 h-20 rounded-full" alt="logo" />
        </div>

        <div className="flex gap-4 items-center justify-center bg-white p-6 rounded-full text-gray-500">
          <p
            onClick={() => scrollToRef("home")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary"
          >
            {t("header.HOME")}
          </p>
          <p
            onClick={() => scrollToRef("about")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary"
          >
            {t("header.ABOUT")}
          </p>

          {/* <p onClick={() => scrollToRef("team")} className="cursor-pointer hover-7">TEAM</p> */}
          <p
            onClick={() => scrollToRef("services")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary"
          >
            {t("header.SERVICES")}
          </p>
          <p
            onClick={() => navigate('/blog')}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary"
          >
            {t("header.BLOG")}
          </p>
          <p
            onClick={() => scrollToRef("contact")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary"
          >
            {t("header.CONTACT")}
          </p>
        </div>

        <LanguageSelector />
      </div>

      <section className="header_background  mb-20 flex flex-col gap-14 items-center justify-center">
        <h1 className="text-3d" data-heading="CodeNovex">
          CodeNovex
        </h1>
        <div className="flex flex-col gap-4 text-3xl items-center">
          <p>{t("header.BUILDING")}</p>
          <p>{t("header.SUCCESS")}</p>
          <p>{t("header.TOGETHER")}</p>
        </div>
        <div
          className="mt-10 flex flex-col gap-3 items-center justify-center cursor-pointer"
          onClick={() => handleScroll("about")}
        >
          <div className="scroll-down-dude" aria-hidden="true"></div>

          <p className="text-2xl">{t("header.SCROLL")}</p>
        </div>
      </section>
      {isDropdownVisible && (
        <DropdownContent
          scrollToRef={scrollToRef}
          closeDropdown={closeDropdown}
          navigate={navigate}
          t={t}
        />
      )}
    </header>
  );
};

const NavItem = ({ children, onClick }: NavItemProps) => {
  return (
    <button
      className="text-black hover:text-brand-primary transition duration-300 focus:outline-none font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const DropdownContent = ({
  scrollToRef,
  closeDropdown,
  navigate,
  t,
}: DropdownContentProps) => {
  return (
    <div className="fixed inset-0 flex w-full justify-center bg-gray-900 bg-opacity-95 z-[999] animate-fadeIn">
      <div className="relative h-[100vh] w-full bg-white p-4 flex flex-col gap-16 dropdown_wrapper transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-4xl font-bold">CodeNovex</h2>
          <button 
            onClick={closeDropdown}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close menu"
          >
            <img src={CloseIcon} alt="Close" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-between items-start">
          <nav className="flex flex-col space-y-8 items-start text-black relative text-xl">
            <NavItem onClick={() => scrollToRef("about")}>
              {t("header.ABOUT")}
            </NavItem>
            <NavItem onClick={() => scrollToRef("services")}>
              {t("header.SERVICES")}
            </NavItem>
            <NavItem onClick={() => { closeDropdown(); navigate('/blog'); }}>
              {t("header.BLOG")}
            </NavItem>
            <NavItem onClick={() => scrollToRef("contact")}>
              {t("header.CONTACT")}
            </NavItem>
          </nav>
          <LanguageSelector />
        </div>

        {/* <div className="mt-20">
          <img src={Logo} alt="Logo" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
