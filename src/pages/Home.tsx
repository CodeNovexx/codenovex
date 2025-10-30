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
    <>
      <Header
        aboutRef={aboutRef}
        teamRef={teamRef}
        servicesRef={servicesRef}
        footerRef={footerRef}
      />
      <main className="max-w-[1440px] mx-auto">
        <Aboutus ref={aboutRef} footerRef={footerRef} />
        <Team ref={teamRef} />
        <Services ref={servicesRef} />
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default Home;
