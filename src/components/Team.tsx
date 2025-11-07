import React from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import profilePicture from "../assets/profile.webp";

const Team = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  const linkedInUrl = "https://www.linkedin.com/in/sandro-tushurashvili";

  return (
    <section
      className="py-20 px-5 md:px-7 lg:px-9 bg-gradient-to-b from-transparent to-gray-900/30"
      ref={ref}
      aria-labelledby="team-heading"
    >
      {/* Philosophy Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-white">
          <h2
            id="team-heading"
            className={`${
              isGeorgian
                ? "text-3xl md:text-4xl leading-[1.4] pb-2"
                : "text-4xl md:text-5xl pb-2"
            } font-bold mb-6 text-white`}
          >
            {t("team.WHO_WE_ARE")}
          </h2>

          <p
            className={`${
              isGeorgian ? "text-base leading-[1.9]" : "text-base leading-relaxed"
            } text-gray-300 max-w-4xl`}
          >
            {t("team.WHO_WE_ARE_TEXT")}
          </p>
        </div>
      </div>

      {/* Founder's Vision Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3
            className={`${
              isGeorgian
                ? "text-2xl md:text-3xl leading-[1.4] pb-2"
                : "text-3xl md:text-4xl pb-2"
            } font-bold text-center text-white`}
          >
            {t("team.FOUNDER_VISION")}
          </h3>
        </div>

        <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:border-brand-primary/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-purple-600/5"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12">
            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-purple-600/20 border-2 border-brand-primary/30 flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-brand-primary/60 transition-all duration-300">
                  <img
                    src={profilePicture}
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <p
                className={`${
                  isGeorgian
                    ? "text-base leading-[1.9]"
                    : "text-base leading-relaxed"
                } text-gray-300`}
              >
                {t("team.FOUNDER_TEXT")}
              </p>

              <div>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-brand-primary/30 hover:shadow-brand-primary/50 group"
                  aria-label="Visit founder's LinkedIn profile"
                >
                  <span>{t("team.FOUNDER_LINKEDIN")}</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Team.displayName = "Team";

const MemoizedTeam = React.memo(Team);
export default MemoizedTeam;
