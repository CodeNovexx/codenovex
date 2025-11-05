import React from "react";
import { useTranslation } from "react-i18next";

const Team = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <section
      className="p-5 flex flex-col gap-16 md:p-7 lg:p-9"
      ref={ref}
      aria-labelledby="team-heading"
    >
      <header className="flex flex-col gap-3 text-white lg:flex-row lg:items-center lg:justify-between">
        <h2 id="team-heading" className="text-4xl font-semibold lg:text-4xl">
          {t("team.WHO_WE_ARE")}
        </h2>

        <p className="md:text-xl lg:w-[45%] lg:leading-8">
          {t("team.WHO_WE_ARE_TEXT")}
        </p>
      </header>
    </section>
  );
});

Team.displayName = "Team";

const MemoizedTeam = React.memo(Team);
export default MemoizedTeam;
