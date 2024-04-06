import React from "react";
import ServiceImage from "../assets/world-wide-web.png";
import PlusIcon from "../assets/plus.png";
import MinusIcon from "../assets/minus.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const services = [
    {
      name: "Web 3",
      description: t("services.WEB3"),
    },
    {
      name: "UI/UX",
      description: t("services.UI/UX"),
    },
    {
      name: "Front-End",
      description: t("services.FRONT_END"),
    },
    {
      name: "Back-End",
      description: t("services.BACK_END"),
    },
    {
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

      {services.map((service, index) => (
        <div key={index} className="relative">
          <div className="flex gap-2 items-center mt-10 justify-between md:text-xl">
            <div className="flex gap-2 items-center">
              <img src={ServiceImage} alt="Icon" className="w-7 h-7" />
              <p>{service.name}</p>
            </div>
            <img
              src={openIndex === index ? MinusIcon : PlusIcon}
              alt={openIndex === index ? "minus_icon" : "plus_icon"}
              className="w-6 h-6 bg-white rounded-full p-[1px] cursor-pointer"
              onClick={() => toggleDescription(index)}
            />
          </div>
          <div
            className={`mt-2 p-3 bg-gray-800 rounded-lg text-sm font-bold text-gray-300 overflow-hidden transition-all duration-500 md:text-lg ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {service.description}
          </div>
        </div>
      ))}
    </div>
  );
});

export default Services;
