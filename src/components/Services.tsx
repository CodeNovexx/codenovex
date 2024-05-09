import React from "react";

import { useTranslation } from "react-i18next";
import UxLogo from "../assets/ui_ux_design_logo.png";
import webLogo from "../assets/web_logo.png";
import seoLogo from "../assets/seo_logo.png";
import backEndLogo from "../assets/backend_logo.png";
import frontEndLogo from "../assets/frontend_logo.png";

const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const services = [
    {
      Image: webLogo,
      name: "Web 3",
      description: t("services.WEB3"),
    },
    {
      Image: UxLogo,
      name: "UI/UX",
      description: t("services.UI/UX"),
    },
    {
      Image: frontEndLogo,
      name: "Front-End",
      description: t("services.FRONT_END"),
    },
    {
      Image: backEndLogo,
      name: "Back-End",
      description: t("services.BACK_END"),
    },
    {
      Image: seoLogo,
      name: "SEO",
      description: t("services.SEO"),
    },
  ];

  return (
    <div className="text-white p-5 md:p-7 lg:p-9" ref={ref}>
      <section className="flex flex-col gap-5 lg:items-center">
        <h1 className="text-4xl font-semibold">{t("services.WHAT_WE_DO")}</h1>
        <h1 className="md:text-xl lg:text-2xl">
          {t("services.WHAT_WE_DO_TEXT")}
        </h1>
      </section>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 max-w-[400px] border-2 border-custom-gray rounded-xl px-4 pb-6 mt-10 "
          >
            <img src={service.Image} alt="Icon" />
            <p className="text-xl">{service.name}</p>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Services;
