import React, { useMemo } from "react";

import { useTranslation } from "react-i18next";
import UxLogo from "../assets/ui_ux_design_logo.webp";
import webLogo from "../assets/web_logo.webp";
import seoLogo from "../assets/seo_logo.webp";
import backEndLogo from "../assets/backend_logo.webp";
import frontEndLogo from "../assets/frontend_logo.webp";

const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const services = useMemo(
    () => [
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
    ],
    [t]
  );

  return (
    <section
      id="services"
      className="text-white p-5 md:p-7 lg:p-9"
      ref={ref}
      aria-labelledby="services-heading"
    >
      <header className="flex flex-col gap-5 lg:items-center">
        <h2 id="services-heading" className="text-4xl font-semibold">
          {t("services.WHAT_WE_DO")}
        </h2>
        <p className="md:text-xl lg:text-2xl">
          {t("services.WHAT_WE_DO_TEXT")}
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-2 max-w-[400px] border-2 border-custom-gray rounded-xl px-4 pb-6 mt-10 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={service.Image}
              alt={`${service.name} icon`}
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-center">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
});

Services.displayName = "Services";

const MemoizedServices = React.memo(Services);
export default MemoizedServices;
