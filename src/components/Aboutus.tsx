import React, { RefObject } from "react";
import Logo_Without_Bg from "../assets/logo_without_background.webp";
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
    <section
      id="about"
      className="text-white flex flex-col gap-10 lg:flex-row xl:gap-[200px]"
      ref={ref}
      aria-labelledby="why-us-heading"
    >
      <article className="flex flex-col gap-4 p-5 md:p-7 lg:p-9">
        <h2 id="why-us-heading" className="text-4xl font-semibold">
          {t("why_us.WHY_US")}
        </h2>
        <p className="text-lg leading-8 md:text-xl">
          {t("why_us.WHY_US_TEXT")}
        </p>

        <div className="hidden lg:flex flex-col gap-3 rounded-3xl bg-gradient-to-br from-[#3A556D] to-[#2a3f51] p-5 w-full md:p-7 shadow-lg">
          <h3 className="text-4xl font-semibold">{t("why_us.PRICING")}</h3>
          <p className="text-lg md:text-xl">{t("why_us.PRICING_TEXT")}</p>
        </div>
      </article>

      <aside className="relative border-2 border-brand-primary/30 m-5 rounded-3xl flex flex-col gap-3 md:m-7 lg:m-9 hover:border-brand-primary transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20">
        <div className="flex justify-between items-center pr-5">
          <img
            src={Logo_Without_Bg}
            alt="CodeNovex Logo"
            className="w-28 h-28"
          />
          <p className="text-3xl font-semibold">CodeNovex</p>
        </div>

        <p className="text-lg px-5 pb-5 md:text-xl">
          {t("why_us.PRICING_BOX")}
        </p>

        <button
          className="bg-brand-primary hover:bg-brand-hover m-5 rounded-3xl text-white p-2 text-xl md:text-2xl lg:mt-12 xl:mt-10 transition-all duration-200 font-semibold shadow-lg hover:shadow-brand-primary/50 hover:scale-105"
          onClick={() => scrollToRef("contact")}
          aria-label="Contact CodeNovex for project consultation"
        >
          {t("why_us.PRICING_BTN")}
        </button>
      </aside>

      <div className="flex flex-col gap-3 bg-gradient-to-br from-[#3A556D] to-[#2a3f51] p-5 w-full md:p-7 lg:hidden shadow-lg">
        <h3 className="text-4xl">{t("why_us.PRICING")}</h3>
        <p className="text-lg md:text-xl">{t("why_us.PRICING_TEXT")}</p>
      </div>
    </section>
  );
});

Aboutus.displayName = "Aboutus";

const MemoizedAboutus = React.memo(Aboutus);
export default MemoizedAboutus;
