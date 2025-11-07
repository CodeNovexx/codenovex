import React, { useMemo } from "react";

import { useTranslation } from "react-i18next";
import UxLogo from "../assets/ui_ux_design_logo.webp";
import webLogo from "../assets/web_logo.webp";
import seoLogo from "../assets/seo_logo.webp";
import backEndLogo from "../assets/backend_logo.webp";
import frontEndLogo from "../assets/frontend_logo.webp";

const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === 'ka';

  const services = useMemo(
    () => [
      {
        Image: webLogo,
        name: "Web 3",
        description: t("services.WEB3"),
        gradient: "from-brand-primary to-cyan-500"
      },
      {
        Image: UxLogo,
        name: "UI/UX",
        description: t("services.UI/UX"),
        gradient: "from-purple-500 to-pink-500"
      },
      {
        Image: frontEndLogo,
        name: "Front-End",
        description: t("services.FRONT_END"),
        gradient: "from-blue-500 to-indigo-500"
      },
      {
        Image: backEndLogo,
        name: "Back-End",
        description: t("services.BACK_END"),
        gradient: "from-orange-500 to-red-500"
      },
      {
        Image: seoLogo,
        name: "SEO",
        description: t("services.SEO"),
        gradient: "from-green-500 to-emerald-500"
      },
    ],
    [t]
  );

  return (
    <section
      id="services"
      className="text-white py-20 px-5 md:px-7 lg:px-9"
      ref={ref}
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 
          id="services-heading" 
          className={`${isGeorgian ? 'text-3xl md:text-4xl leading-[1.4] pb-2' : 'text-4xl md:text-5xl pb-2'} font-bold mb-6 text-white`}
        >
          {t("services.WHAT_WE_DO")}
        </h2>
        <p className={`${isGeorgian ? 'text-base leading-[1.9]' : 'text-base leading-relaxed'} text-gray-300 max-w-3xl mx-auto`}>
          {t("services.WHAT_WE_DO_TEXT")}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <article
            key={index}
            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2"
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Icon Container with Gradient Background */}
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 p-1`}>
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  <img
                    src={service.Image}
                    alt={`${service.name} icon`}
                    loading="lazy"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className={`${isGeorgian ? 'text-xl leading-[1.4]' : 'text-xl'} font-bold mb-4 text-white`}>
                {service.name}
              </h3>

              {/* Description */}
              <p className={`${isGeorgian ? 'text-base leading-[1.9]' : 'text-base leading-relaxed'} text-gray-400`}>
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

Services.displayName = "Services";

const MemoizedServices = React.memo(Services);
export default MemoizedServices;
