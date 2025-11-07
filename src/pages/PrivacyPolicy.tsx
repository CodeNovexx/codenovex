import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../components/ScrollToTop";
import { Footer } from "../components/Footer";
import BlogHeader from "../components/BlogHeader";

// Helper function to format text with bold markers and paragraphs
const formatLegalText = (text: string) => {
  // Split by paragraphs
  const paragraphs = text.split('\n\n');
  
  return paragraphs.map((paragraph, pIndex) => {
    // Check if paragraph starts with bold marker (heading)
    const boldMatch = paragraph.match(/^\*\*(.*?)\*\*/);
    
    if (boldMatch) {
      // It's a heading
      const headingText = boldMatch[1];
      const restText = paragraph.slice(boldMatch[0].length).trim();
      
      return (
        <div key={pIndex} className="mb-6">
          <h3 className="text-xl font-bold text-white mb-3">
            {headingText}
          </h3>
          {restText && (
            <p className="text-gray-300 leading-relaxed">
              {restText}
            </p>
          )}
        </div>
      );
    } else {
      // It's a regular paragraph
      return (
        <p key={pIndex} className="text-gray-300 leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    }
  });
};

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <BlogHeader />

      {/* Content - Added top padding for fixed header */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        {/* Decorative Background */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-semibold rounded-full">
                {t("legal.badge")}
              </span>
            </div>
            <h1
              className={`${
                isGeorgian
                  ? "text-4xl md:text-5xl leading-[1.4] pb-2"
                  : "text-5xl md:text-6xl pb-2"
              } font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent`}
            >
              {t("legal.privacyTitle")}
            </h1>
          </div>

          {/* Content Card */}
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-gray-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-purple-600/5 rounded-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div
                className={`${
                  isGeorgian
                    ? "text-base leading-[1.9]"
                    : "text-lg leading-relaxed"
                }`}
              >
                {formatLegalText(t("legal.privacyContent"))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                  {t("legal.lastUpdated")}: {t("legal.updateDate")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/#contact")}
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-primary to-cyan-500 hover:from-brand-hover hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-2">
                {t("legal.contactUs")}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;
