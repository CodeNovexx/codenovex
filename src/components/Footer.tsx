import React from "react";
import Logo from "../assets/logo_without_background.png";

import { useTranslation } from "react-i18next";

export const Footer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-white py-12 px-4 flex flex-col gap-4 items-center rounded-lg md:mt-0"
      ref={ref}
    >
      <img
        src={Logo}
        alt="Logo"
        className="w-36 h-36 self-center md:w-40 md:h-40 logo-effect"
      />
      <p className="text-center text-xl md:text-2xl md:w-[600px]">
        {t("footer.FOOTER_TEXT")}
      </p>

      <div className="flex flex-col gap-3 items-center text-center text-xl font-sans text-gray-700 mb-7 md:text-2xl">
        <a href="mailto: info@codenovex.ge">
          {t("footer.EMAIL")}{" "}
          <span className="font-bold">info@codenovex.ge</span>
        </a>
        <a href="tel:555 16 71 55">
          {t("footer.PHONE")} <span className="font-bold"> 555 16 71 55</span>
        </a>
      </div>
      <ul>
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
      </ul>
    </div>
  );
});
