import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.webp";
import LanguageSelector from "./LanguageSelector";

const BlogHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isBlogPage =
    location.pathname === "/blog" || location.pathname.startsWith("/blog/");

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const contactElement = document.querySelector('[data-section="contact"]');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleHomeClick}
            className="flex items-center gap-3 group"
          >
            <img
              src={Logo}
              alt="CodeNovex"
              className="w-12 h-12 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-white text-xl font-bold hidden sm:block">
              CodeNovex
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <button
              onClick={handleHomeClick}
              className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium hidden md:block"
            >
              {t("header.HOME")}
            </button>
            <button
              onClick={() => navigateToPage("/process")}
              className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium hidden md:block"
            >
              {t("header.PROCESS")}
            </button>

            {/* Blog link - hidden on blog pages */}
            {!isBlogPage && (
              <button
                onClick={() => navigateToPage("/blog")}
                className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium hidden md:block"
              >
                {t("header.BLOG")}
              </button>
            )}

            <button
              onClick={handleContactClick}
              className="relative px-4 py-2 text-sm font-medium text-brand-primary border border-brand-primary/40 rounded-lg backdrop-blur-sm bg-brand-primary/5 hover:bg-brand-primary/10 hover:border-brand-primary/60 hover:shadow-lg hover:shadow-brand-primary/20 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">{t("header.CONTACT")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            </button>
            <LanguageSelector size="compact" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
