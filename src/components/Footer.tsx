import React from "react";
import Logo from "../assets/logo_without_background.webp";
import FbLogo from "../assets/fb_icon.webp";
import InstaLogo from "../assets/instagram_icon.webp";
import LinkedInLogo from "../assets/linkedin_icon.webp";
import TiktokLogo from "../assets/tiktok_icon.webp";

import { useTranslation } from "react-i18next";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <footer
      id="contact"
      className="relative bg-white py-16 px-4 flex flex-col gap-6 items-center overflow-hidden"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      {/* Decorative blur orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 items-center max-w-4xl mx-auto">
        <img
          src={Logo}
          alt="CodeNovex Logo"
          className="w-36 h-36 self-center md:w-40 md:h-40 logo-effect transform hover:scale-105 transition-transform duration-300"
        />
        <h2 id="contact-heading" className="text-center text-xl md:text-2xl lg:text-3xl md:w-[700px] font-semibold text-gray-900">
          {t("footer.FOOTER_TEXT")}
        </h2>

        <address className="flex flex-col gap-4 items-center text-center text-lg font-sans text-gray-700 mb-4 md:text-xl not-italic">
          <a href="mailto:info@codenovex.ge" className="group flex items-center gap-2 hover:text-brand-primary transition-colors">
            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              {t("footer.EMAIL")}{" "}
              <span className="font-bold">info@codenovex.ge</span>
            </span>
          </a>
          <a href="tel:+995555050001" className="group flex items-center gap-2 hover:text-brand-primary transition-colors">
            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>
              {t("footer.PHONE")} <span className="font-bold">+995 555 05 00 01</span>
            </span>
          </a>
        </address>

        <div className="flex gap-5 mt-4">
          <a
            href="https://www.linkedin.com/company/codenovex"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
            aria-label="Visit CodeNovex on LinkedIn"
          >
            <img src={LinkedInLogo} alt="LinkedIn" loading="lazy" width="48" height="48" className="hover:opacity-80" />
          </a>
          <a
            href="https://www.facebook.com/CodeNovex"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
            aria-label="Visit CodeNovex on Facebook"
          >
            <img src={FbLogo} alt="Facebook" loading="lazy" width="48" height="48" className="hover:opacity-80" />
          </a>
          <a
            href="https://www.instagram.com/codenovex"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
            aria-label="Visit CodeNovex on Instagram"
          >
            <img src={InstaLogo} alt="Instagram" loading="lazy" width="48" height="48" className="hover:opacity-80" />
          </a>
          <a
            href="https://www.tiktok.com/@codenovex"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1"
            aria-label="Visit CodeNovex on TikTok"
          >
            <img src={TiktokLogo} alt="TikTok" loading="lazy" width="48" height="48" className="hover:opacity-80" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 w-full text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeNovex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
