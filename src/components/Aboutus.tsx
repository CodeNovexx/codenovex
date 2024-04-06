import React, { RefObject } from "react";
import Logo_Without_Bg from "../assets/logo_without_background.png";
import { AboutusProps } from "../types/aboutUs";
import { useTranslation } from "react-i18next";

const Aboutus = React.forwardRef<HTMLDivElement, AboutusProps>((props, ref) => {
  const { t } = useTranslation();
  const { footerRef } = props;
  const scrollToRef = (refName: string) => {
    const refs: { [key: string]: RefObject<HTMLDivElement> } = {
      contact: footerRef,
    };

    const targetRef = refs[refName];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="text-white flex flex-col gap-10 lg:flex-row xl:gap-[200px]"
      ref={ref}
    >
      <div className="flex flex-col gap-4  p-5 md:p-7 lg:p-9">
        <h1 className="text-4xl font-semibold">{t("why_us.WHY_US")}</h1>
        <p className="text-lg leading-8 md:text-xl">
          {t("why_us.WHY_US_TEXT")}
        </p>

        <div className="hidden lg:flex flex-col gap-3 rounded-3xl bg-[#3A556D] p-5 w-full md:p-7">
          <h1 className="text-4xl font-semibold">{t("why_us.PRICING")}</h1>
          <p className="text-lg md:text-xl">{t("why_us.PRICING_TEXT")}</p>
        </div>
      </div>

      <div className="relative border border-1-white m-5 rounded-3xl flex flex-col gap-3 md:m-7 lg:m-9">
        <div className="flex justify-between items-center pr-5">
          <img src={Logo_Without_Bg} alt="Logo" className="w-28 h-28" />
          <p className="text-3xl font-semibold">CodeNovex</p>
        </div>

        <p className="text-lg px-5 pb-5 md:text-xl">
          {t("why_us.PRICING_BOX")}
        </p>

        <button
          className="bg-white m-5 rounded-3xl text-black p-2 text-xl md:text-2xl lg:mt-12 xl:mt-10"
          onClick={() => scrollToRef("contact")}
        >
          {t("why_us.PRICING_BTN")}
        </button>
      </div>

      <div className="flex flex-col gap-3 bg-[#3A556D] p-5 w-full md:p-7 lg:hidden">
        <h1 className="text-4xl">{t("why_us.PRICING")}</h1>
        <p className="text-lg md:text-xl">{t("why_us.PRICING_TEXT")}</p>
      </div>
    </div>
  );
});

export default Aboutus;
