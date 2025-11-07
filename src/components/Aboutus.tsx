import React from "react";
import { TrendingUp, Shield, Handshake } from "lucide-react";
import { AboutusProps } from "../types/aboutUs";
import { useTranslation } from "react-i18next";

const Aboutus = React.forwardRef<HTMLDivElement, AboutusProps>((_, ref) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === 'ka';

  const features = [
    {
      icon: TrendingUp,
      title: t("why_us.FEATURE_1_TITLE"),
      text: t("why_us.FEATURE_1_TEXT"),
      gradient: "from-brand-primary to-cyan-500"
    },
    {
      icon: Shield,
      title: t("why_us.FEATURE_2_TITLE"),
      text: t("why_us.FEATURE_2_TEXT"),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Handshake,
      title: t("why_us.FEATURE_3_TITLE"),
      text: t("why_us.FEATURE_3_TEXT"),
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section
      id="about"
      className="text-white py-20 px-5 md:px-7 lg:px-9"
      ref={ref}
      aria-labelledby="why-us-heading"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 id="why-us-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {t("why_us.WHY_US")}
        </h2>
      </div>

      {/* Three Feature Blocks */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <article
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className={`${isGeorgian ? 'text-2xl leading-[1.4]' : 'text-2xl'} font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`${isGeorgian ? 'text-base leading-[1.9]' : 'text-base leading-relaxed'} text-gray-400`}>
                  {feature.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Transparent Investment Section - Now Full Width */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#3A556D]/80 to-[#2a3f51]/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl hover:border-brand-primary/30 transition-all duration-300">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-purple-600/5 rounded-3xl"></div>
          
          <div className="relative z-10">
            <h3 className={`${isGeorgian ? 'text-3xl leading-[1.3]' : 'text-4xl'} font-bold mb-6 text-white`}>
              {t("why_us.PRICING")}
            </h3>
            <p className={`${isGeorgian ? 'text-lg leading-[1.9]' : 'text-xl leading-relaxed'} text-gray-200`}>
              {t("why_us.PRICING_TEXT")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Aboutus.displayName = "Aboutus";

const MemoizedAboutus = React.memo(Aboutus);
export default MemoizedAboutus;
