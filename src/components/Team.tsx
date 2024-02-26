import Sandro from "../assets/team_images/SandroTushurashvili.jpeg";
import Anri from "../assets/team_images/AnriKopaliani.png";
import Mariam from "../assets/team_images/MariamDatukishvili.png";
import Teona from "../assets/team_images/TeonaPiranishvili.jpg";
import Davit from "../assets/team_images/DavitLabadze.png";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div className="p-5 flex flex-col gap-16">
      <section className="flex flex-col gap-3 text-white">
        <h1 className="text-2xl">Who We Are ?</h1>

        <p>
          We are a diverse and dedicated team of developers, designers, and tech
          enthusiasts united by our passion for innovation and our commitment to
          excellence. With a deep understanding of cutting-edge technologies and
          a collaborative approach to problem-solving, we strive to create
          bespoke software solutions that not only meet but exceed the unique
          needs and expectations of our clients. Our journey is defined by a
          relentless pursuit of quality, creativity, and customer satisfaction,
          as we continue to push the boundaries of possibility and shape the
          digital landscape one project at a time.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <TeamMemberCard
          name="Sandro Tushurashvili"
          role="CEO"
          imageSrc={Sandro}
          altText="Sandro Tushurashvili"
        />
        <TeamMemberCard
          name="Anri Kopaliani"
          role="Frontend Developer"
          imageSrc={Anri}
          altText="Anri Kopaliani"
        />
        <TeamMemberCard
          name="Mariam Datukishvili"
          role="Frontend Developer"
          imageSrc={Mariam}
          altText="Mariam Datukishvili"
        />
        <TeamMemberCard
          name="Teona Piranishvili"
          role="Frontend Developer"
          imageSrc={Teona}
          altText="Teona Piranishvili"
        />
        <TeamMemberCard
          name="Davit Labadze"
          role="Backend Developer"
          imageSrc={Davit}
          altText="Davit Labadze"
        />
      </section>
    </div>
  );
};

export default Team;
