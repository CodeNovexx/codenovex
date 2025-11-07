import { RefObject, useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.webp";
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
    setDropdownVisible((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setDropdownVisible(false);
  }, []);

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDropdownVisible]);

  const scrollToRefOnHome = useCallback(
    (refName: string) => {
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
          behavior: "auto",
        });
        closeDropdown();
      }
    },
    [aboutRef, teamRef, servicesRef, footerRef, closeDropdown]
  );

  // Handle hash navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && location.pathname === "/") {
        setTimeout(() => {
          scrollToRefOnHome(hash);
        }, 100);
      }
    };

    // Handle hash on mount and navigation
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [location.pathname, scrollToRefOnHome]);

  const scrollToRef = useCallback(
    (refName: string) => {
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          scrollToRefOnHome(refName);
        }, 100);
      } else {
        scrollToRefOnHome(refName);
      }
    },
    [navigate, location.pathname, scrollToRefOnHome]
  );

  const handleScroll = useCallback(
    (refName: string) => {
      const ref: { [key: string]: RefObject<HTMLDivElement> } = {
        about: aboutRef,
      };

      const targetRef = ref[refName];

      if (targetRef && targetRef.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: "auto",
        });
      }
    },
    [aboutRef]
  );
  return (
    <header className=" text-white flex flex-col w-full max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center py-4 px-6 md:hidden">
        <button
          onClick={toggleDropdown}
          className="group p-2.5 rounded-xl bg-gray-900/80 border border-gray-700/50 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 backdrop-blur-sm"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors duration-300" />
        </button>
        
        <button
          onClick={() => scrollToRef("home")}
          className="group relative flex items-center cursor-pointer"
          aria-label="Navigate to home"
        >
          <div className="relative">
            <img 
              src={Logo} 
              alt="CodeNovex Logo" 
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-800 group-hover:border-brand-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-primary/30" 
            />
          </div>
        </button>

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

      <div className="hidden md:flex md:items-center md:justify-between md:mx-auto md:w-full p-7 lg:p-9 gap-4">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <button
            onClick={() => scrollToRef("home")}
            className="group relative cursor-pointer"
            aria-label="Navigate to home"
          >
            <div className="relative">
              <img 
                src={Logo} 
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-800 group-hover:border-brand-primary transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-primary/40" 
                alt="CodeNovex Logo" 
              />
            </div>
            {/* Logo Text on Hover */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-semibold text-brand-primary whitespace-nowrap">
                CodeNovex
              </span>
            </div>
         
          </button>
        </div>

        {/* Center: Navigation */}
        <div className="flex gap-2 lg:gap-3 items-center justify-center bg-white px-4 py-3 lg:px-6 lg:py-4 rounded-full text-gray-500">
          <p
            onClick={() => scrollToRef("home")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary text-sm lg:text-lg whitespace-nowrap "
          >
            {t("header.HOME")}
          </p>
          <p
            onClick={() => scrollToRef("about")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary text-sm lg:text-lg whitespace-nowrap"
          >
            {t("header.ABOUT")}
          </p>

          {/* <p onClick={() => scrollToRef("team")} className="cursor-pointer hover-7">TEAM</p> */}
          <p
            onClick={() => scrollToRef("services")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary text-sm lg:text-lg whitespace-nowrap"
          >
            {t("header.SERVICES")}
          </p>
          <p
            onClick={() => navigate("/process")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary text-sm lg:text-lg whitespace-nowrap"
          >
            {t("header.PROCESS")}
          </p>
          <p
            onClick={() => navigate("/blog")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary text-sm lg:text-lg whitespace-nowrap"
          >
            {t("header.BLOG")}
          </p>
          <p
            onClick={() => scrollToRef("contact")}
            className="cursor-pointer hover text-gray-700 hover:text-brand-primary text-sm lg:text-lg whitespace-nowrap"
          >
            {t("header.CONTACT")}
          </p>
        </div>

        {/* Right: Language Selector */}
        <div className="flex justify-end">
          <LanguageSelector />
        </div>
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
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] animate-in fade-in duration-300"
        onClick={closeDropdown}
      ></div>

      {/* Slide-in Menu */}
      <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-[999] shadow-2xl animate-in slide-in-from-right duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="CodeNovex" className="w-12 h-12 rounded-full" />
            <h2 className="text-white text-xl font-bold">CodeNovex</h2>
          </div>
          <button
            onClick={closeDropdown}
            className="group p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:bg-red-500/10"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-2">
          <NavItem onClick={() => scrollToRef("about")}>
            <div className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-purple-600/10 transition-all duration-300">
              <span className="text-gray-300 group-hover:text-white font-medium">
                {t("header.ABOUT")}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavItem>

          <NavItem onClick={() => scrollToRef("services")}>
            <div className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-purple-600/10 transition-all duration-300">
              <span className="text-gray-300 group-hover:text-white font-medium">
                {t("header.SERVICES")}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavItem>

          <NavItem
            onClick={() => {
              closeDropdown();
              navigate("/process");
            }}
          >
            <div className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-purple-600/10 transition-all duration-300">
              <span className="text-gray-300 group-hover:text-white font-medium">
                {t("header.PROCESS")}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavItem>

          <NavItem
            onClick={() => {
              closeDropdown();
              navigate("/blog");
            }}
          >
            <div className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-purple-600/10 transition-all duration-300">
              <span className="text-gray-300 group-hover:text-white font-medium">
                {t("header.BLOG")}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavItem>

          <NavItem onClick={() => scrollToRef("contact")}>
            <div className="group flex items-center justify-between w-full p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-brand-primary/50 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-purple-600/10 transition-all duration-300">
              <span className="text-gray-300 group-hover:text-white font-medium">
                {t("header.CONTACT")}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavItem>
        </nav>

        {/* Language Selector */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
            <p className="text-gray-400 text-sm mb-3">{t("header.LANGUAGE")}</p>
            <LanguageSelector openUpward={true} />
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </>
  );
};

export default Header;
