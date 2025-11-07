import React from "react";
import Logo from "../assets/logo_without_background.webp";
import FbLogo from "../assets/fb_icon.webp";
import InstaLogo from "../assets/instagram_icon.webp";
import LinkedInLogo from "../assets/linkedin_icon.webp";
import TiktokLogo from "../assets/tiktok_icon.webp";

import { useTranslation } from "react-i18next";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === 'ka';
  
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-5 md:px-7 lg:px-9 flex flex-col gap-10 items-center overflow-hidden border-t border-gray-800"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 items-center max-w-5xl mx-auto w-full">
        
        {/* Logo */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={Logo}
            alt="CodeNovex Logo"
            className="relative w-32 h-32 md:w-40 md:h-40 transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Heading */}
        <h2
          id="contact-heading"
          className={`text-center ${isGeorgian ? 'text-2xl md:text-3xl leading-[1.4] pb-2' : 'text-3xl md:text-4xl pb-2'} font-bold text-white max-w-3xl`}
        >
          {t("footer.FOOTER_TEXT")}
        </h2>

        {/* Contact Info - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-4">
          <a
            href="mailto:info@codenovex.ge"
            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className={`text-gray-400 mb-1 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}>{t("footer.EMAIL")}</p>
                <p className={`text-white font-bold ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}>info@codenovex.ge</p>
              </div>
            </div>
          </a>

          <a
            href="tel:+995555050001"
            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className={`text-gray-400 mb-1 ${isGeorgian ? 'text-sm leading-[1.6]' : 'text-sm'}`}>{t("footer.PHONE")}</p>
                <p className={`text-white font-bold ${isGeorgian ? 'text-base leading-[1.6]' : 'text-base'}`}>+995 555 05 00 01</p>
              </div>
            </div>
          </a>
        </div>

        {/* Social Media - Premium Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/company/codenovex"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit CodeNovex on LinkedIn"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-14 h-14 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>

          <a
            href="https://www.facebook.com/CodeNovex"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit CodeNovex on Facebook"
          >
            <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-14 h-14 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20">
              <img
                src={FbLogo}
                alt="Facebook"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>

          <a
            href="https://www.instagram.com/codenovex"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit CodeNovex on Instagram"
          >
            <div className="absolute inset-0 bg-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-14 h-14 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20">
              <img
                src={InstaLogo}
                alt="Instagram"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@codenovex"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit CodeNovex on TikTok"
          >
            <div className="absolute inset-0 bg-gray-300/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-14 h-14 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center hover:border-gray-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-300/20">
              <img
                src={TiktokLogo}
                alt="TikTok"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 w-full">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} CodeNovex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
