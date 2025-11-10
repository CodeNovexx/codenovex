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
import { useActiveSection } from "../hooks/useActiveSection";

const Header = ({ aboutRef, teamRef, servicesRef, footerRef }: HeaderProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Scroll-spy for homepage sections - always call hook, use conditionally
  const detectedSection = useActiveSection(["about", "services", "contact"]);
  const activeSection = location.pathname === "/" ? detectedSection : null;

  // Detect scroll for sticky header background and position tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // More precise "at top" detection - only true when very close to top
      // This ensures HOME indicator only shows when actually at the top
      setIsAtTop(scrollY < 200);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          behavior: "smooth", // Smooth scroll when clicking navigation links
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
      // Special case: "home" should scroll to top
      if (refName === "home") {
        if (location.pathname !== "/") {
          navigate("/");
        }
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

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

  // Navigate to page routes and scroll to top
  const navigateToPage = useCallback((path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, [navigate]);

  const handleScroll = useCallback(
    (refName: string) => {
      const ref: { [key: string]: RefObject<HTMLDivElement> } = {
        about: aboutRef,
      };

      const targetRef = ref[refName];

      if (targetRef && targetRef.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: "smooth", // Smooth scroll when clicking scroll-down arrow
        });
      }
    },
    [aboutRef]
  );
  return (
    <>
      {/* Sticky Navigation - Independent from hero section */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/98 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="w-full max-w-[1440px] mx-auto">
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

        <div className="hidden md:flex md:items-center md:justify-between md:mx-auto md:w-full p-5 gap-4">
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
        <div className="flex gap-3 lg:gap-4 items-center justify-center bg-white px-6 py-4 lg:px-8 lg:py-5 rounded-full shadow-lg">
          {/* HOME - Active when at top of homepage */}
          <button
            onClick={() => scrollToRef("home")}
            className={`relative group cursor-pointer text-gray-700 hover:text-brand-primary text-sm lg:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300 ${
              (location.pathname === "/" && isAtTop && !activeSection) ? "text-brand-primary" : ""
            }`}
          >
            {t("header.HOME")}
            {location.pathname === "/" && isAtTop && !activeSection && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/50"></span>
            )}
          </button>
          
          {/* ABOUT - Active when scrolled to about section on homepage */}
          <button
            onClick={() => scrollToRef("about")}
            className={`relative group cursor-pointer text-gray-700 hover:text-brand-primary text-sm lg:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300 ${
              (location.pathname === "/" && activeSection === "about") ? "text-brand-primary" : ""
            }`}
          >
            {t("header.ABOUT")}
            {location.pathname === "/" && activeSection === "about" && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/50 animate-pulse"></span>
            )}
          </button>

          {/* SERVICES - Active when scrolled to services section on homepage */}
          <button
            onClick={() => scrollToRef("services")}
            className={`relative group cursor-pointer text-gray-700 hover:text-brand-primary text-sm lg:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300 ${
              (location.pathname === "/" && activeSection === "services") ? "text-brand-primary" : ""
            }`}
          >
            {t("header.SERVICES")}
            {location.pathname === "/" && activeSection === "services" && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/50 animate-pulse"></span>
            )}
          </button>
          
          {/* PROCESS - Active when on /process page (URL match) */}
          <button
            onClick={() => navigateToPage("/process")}
            className={`relative group cursor-pointer text-gray-700 hover:text-brand-primary text-sm lg:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300 ${
              location.pathname === "/process" ? "text-brand-primary" : ""
            }`}
          >
            {t("header.PROCESS")}
            {location.pathname === "/process" && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/50"></span>
            )}
          </button>
          
          {/* BLOG - Active when on /blog or /blog/* page (URL match) */}
          <button
            onClick={() => navigateToPage("/blog")}
            className={`relative group cursor-pointer text-gray-700 hover:text-brand-primary text-sm lg:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300 ${
              (location.pathname === "/blog" || location.pathname.startsWith("/blog/")) ? "text-brand-primary" : ""
            }`}
          >
            {t("header.BLOG")}
            {(location.pathname === "/blog" || location.pathname.startsWith("/blog/")) && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/50"></span>
            )}
          </button>
          
          {/* CONTACT - Active when scrolled to contact section on homepage */}
          <button
            onClick={() => scrollToRef("contact")}
            className={`relative group cursor-pointer text-gray-700 hover:text-brand-primary text-sm lg:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300 ${
              (location.pathname === "/" && activeSection === "contact") ? "text-brand-primary" : ""
            }`}
          >
            {t("header.CONTACT")}
            {location.pathname === "/" && activeSection === "contact" && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/50 animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Right: Language Selector */}
        <div className="flex justify-end">
          <LanguageSelector />
        </div>
      </div>
        </div>
      </nav>

      {/* Hero Section - Separate from navigation, with top padding to avoid overlap */}
      <header className="text-white w-full max-w-[1440px] mx-auto pt-20 md:pt-28">
      <section className="header_background mb-20 flex flex-col gap-14 items-center justify-center">
        <h1 className="text-3d" data-heading="CodeNovex">
          CodeNovex
        </h1>
        <div className="flex flex-col gap-4 text-3xl items-center justify-center text-center">
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
      </header>

      {/* Mobile Dropdown Menu */}
      {isDropdownVisible && (
        <DropdownContent
          scrollToRef={scrollToRef}
          closeDropdown={closeDropdown}
          navigateToPage={navigateToPage}
          t={t}
        />
      )}
    </>
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
  navigateToPage,
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
              navigateToPage("/process");
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
              navigateToPage("/blog");
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
