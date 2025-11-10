import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import FadeInUp from "../components/FadeInUp";
import ScrollToTop from "../components/ScrollToTop";
import { Footer } from "../components/Footer";
import BlogHeader from "../components/BlogHeader";
import { ScrollProgress } from "../components/ScrollProgress";

const FAQPage = () => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqData: Array<{
    id: number;
    question: string;
    answer: string;
  }> = t("faq.questions", {
    returnObjects: true,
  }) as Array<{
    id: number;
    question: string;
    answer: string;
  }>;

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      {/* Header */}
      <BlogHeader />

      {/* Hero Section - Added top padding for fixed header */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <FadeInUp delay={0.1}>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-semibold rounded-full">
                {t("faq.badge")}
              </span>
            </div>
            
            <h1
              className={`${
                isGeorgian
                  ? "text-4xl md:text-5xl leading-[1.4] pb-2"
                  : "text-5xl md:text-6xl pb-2"
              } font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent`}
            >
              {t("faq.title")}
            </h1>
            
            <p
              className={`text-gray-400 max-w-2xl mx-auto ${
                isGeorgian ? "text-lg leading-[1.9]" : "text-xl leading-relaxed"
              }`}
            >
              {t("faq.subtitle")}
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* FAQ Accordion Section */}
      <section className="relative py-12 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0.3}>
            <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Question Button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="relative z-10 w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left group/button"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <span
                    className={`font-semibold text-white group-hover/button:text-brand-primary transition-colors duration-300 ${
                      isGeorgian ? "text-lg leading-[1.6]" : "text-lg"
                    }`}
                  >
                    {item.question}
                  </span>
                  
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover/button:bg-brand-primary/20 group-hover/button:border-brand-primary/50 transition-all duration-300 ${
                      openItems.includes(item.id) ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover/button:text-brand-primary transition-colors duration-300" />
                  </div>
                </button>

                {/* Answer Section */}
                <div
                  className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(item.id)
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>
                    <p
                      className={`text-gray-300 ${
                        isGeorgian ? "text-base leading-[1.9]" : "text-base leading-relaxed"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                {openItems.includes(item.id) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          </FadeInUp>

          {/* CTA Section */}
          <FadeInUp delay={0.5}>
            <div className="mt-16 text-center">
              <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl px-8 py-6">
                <h3
                  className={`font-bold text-white mb-3 ${
                    isGeorgian ? "text-xl leading-[1.4]" : "text-2xl"
                  }`}
                >
                  {t("faq.ctaTitle")}
                </h3>
                <p
                  className={`text-gray-400 mb-6 ${
                    isGeorgian ? "text-base leading-[1.9]" : "text-base leading-relaxed"
                  }`}
                >
                  {t("faq.ctaSubtitle")}
                </p>
                <button
                  onClick={() => navigate("/#contact")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-brand-primary to-cyan-500 hover:from-brand-hover hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center gap-2">
                    {t("faq.ctaButton")}
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
          </div>
          </FadeInUp>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default FAQPage;
