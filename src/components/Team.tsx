import React from "react";
import { useTranslation } from "react-i18next";
// import Sandro from "../assets/team_images/SandroTushurashvili.jpeg";
// import Anri from "../assets/team_images/AnriKopaliani.png";
// import Mariam from "../assets/team_images/MariamDatukishvili.png";
// import Teona from "../assets/team_images/TeonaPiranishvili.jpg";
// import Davit from "../assets/team_images/DavitLabadze.png";
// import TeamMemberCard from "./TeamMemberCard";

const Team = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <div className="p-5 flex flex-col gap-16 md:p-7 lg:p-9" ref={ref}>
      <section className="flex flex-col gap-3 text-white lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl font-semibold lg:text-[64px]">
          {t("team.WHO_WE_ARE")}
        </h1>

        <p className="md:text-xl lg:w-[45%] lg:leading-8">
          {t("team.WHO_WE_ARE_TEXT")}
        </p>
      </section>

      {/* <section className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-between lg:justify-center">
        <TeamMemberCard
          name="Sandro Tushurashvili"
          role="CEO"
          imageSrc={Sandro}
          altText="Sandro Tushurashvili"
          position="Software Engineer"
        />
        <TeamMemberCard
          name="Anri Kopaliani"
          role="CTO"
          imageSrc={Anri}
          altText="Anri Kopaliani"
          position="Software Engineer"
        />
        <TeamMemberCard
          name="Mariam Datukishvili"
          role="CTO"
          imageSrc={Mariam}
          altText="Mariam Datukishvili"
          position="Software Engineer"
        />
        <TeamMemberCard
          name="Teona Piranishvili"
          role="CTO"
          imageSrc={Teona}
          altText="Teona Piranishvili"
          position="Software Engineer"
        />
        <TeamMemberCard
          name="Davit Labadze"
          role="CTO"
          imageSrc={Davit}
          altText="Davit Labadze"
          position="Software Engineer"
        />
      </section> */}
    </div>
  );
});

export default Team;
