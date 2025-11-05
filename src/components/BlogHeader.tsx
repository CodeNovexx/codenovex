import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.webp";
import LanguageSelector from "./LanguageSelector";

const BlogHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to home page
    navigate('/');
    // Wait for navigation to complete, then scroll to contact
    setTimeout(() => {
      const contactElement = document.querySelector('[data-section="contact"]');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
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
            <Link
              to="/"
              className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium hidden md:block"
            >
              {t("header.HOME")}
            </Link>
            <Link
              to="/blog"
              className="text-brand-primary font-medium hidden md:block"
            >
              {t("header.BLOG")}
            </Link>
            <button
              onClick={handleContactClick}
              className="px-6 py-2 bg-brand-primary hover:bg-brand-hover text-white rounded-lg transition-all duration-300 font-semibold"
            >
              {t("header.CONTACT")}
            </button>
            <LanguageSelector />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
