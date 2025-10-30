import React from "react";
import Logo from "../assets/logo_without_background.png";
import FbLogo from "../assets/fb_icon.png";
import InstaLogo from "../assets/instagram_icon.png";
import LinkedInLogo from "../assets/linkedin_icon.png";
import TiktokLogo from "../assets/tiktok_icon.png";

import { useTranslation } from "react-i18next";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <footer
      className="bg-white py-12 px-4 flex flex-col gap-4 items-center rounded-lg md:mt-0"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <img
        src={Logo}
        alt="CodeNovex Logo"
        className="w-36 h-36 self-center md:w-40 md:h-40 logo-effect"
      />
      <h2 id="contact-heading" className="text-center text-xl md:text-2xl md:w-[600px]">
        {t("footer.FOOTER_TEXT")}
      </h2>

      <address className="flex flex-col gap-3 items-center text-center text-xl font-sans text-gray-700 mb-7 md:text-2xl not-italic">
        <a href="mailto:info@codenovex.ge" className="hover:text-blue-600 transition-colors">
          {t("footer.EMAIL")}{" "}
          <span className="font-bold">info@codenovex.ge</span>
        </a>
        <a href="tel:+995555050001" className="hover:text-blue-600 transition-colors">
          {t("footer.PHONE")} <span className="font-bold">+995 555 05 00 01</span>
        </a>
      </address>
      {/* <ul>
        <li>
          <a href="https://www.facebook.com/CodeNovex" target="_blank">
            <i className="fab fa-facebook-f icon"></i>{" "}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/codenovex" target="_blank">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/codenovex/" target="_blank">
            <i className="fab fa-instagram icon"></i>
          </a>
        </li>
      </ul> */}

      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/company/codenovex"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Visit CodeNovex on LinkedIn"
        >
          <img src={LinkedInLogo} alt="LinkedIn" loading="lazy" width="48" height="48" />
        </a>
        <a
          href="https://www.facebook.com/CodeNovex"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Visit CodeNovex on Facebook"
        >
          <img src={FbLogo} alt="Facebook" loading="lazy" width="48" height="48" />
        </a>
        <a
          href="https://www.instagram.com/codenovex"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Visit CodeNovex on Instagram"
        >
          <img src={InstaLogo} alt="Instagram" loading="lazy" width="48" height="48" />
        </a>
        <a
          href="https://www.tiktok.com/@codenovex"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Visit CodeNovex on TikTok"
        >
          <img src={TiktokLogo} alt="TikTok" loading="lazy" width="48" height="48" />
        </a>
      </div>
    </footer>
  );
});
