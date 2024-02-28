import { useRef } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Aboutus from "../components/Aboutus";
import Team from "../components/Team";
import Services from "../components/Services";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <Header
        aboutRef={aboutRef}
        teamRef={teamRef}
        servicesRef={servicesRef}
        footerRef={footerRef}
      />
      <div className="max-w-[1130px] mx-auto">
        <Aboutus ref={aboutRef} footerRef={footerRef} />
        <Team ref={teamRef} />
        <Services ref={servicesRef} />
      </div>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Home;
