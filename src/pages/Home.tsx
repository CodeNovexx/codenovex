import { useRef } from 'react';
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
    <div className="flex flex-col gap-5">
      <Header aboutRef={aboutRef} teamRef={teamRef} servicesRef={servicesRef} footerRef={footerRef} />
      <Aboutus ref={aboutRef} />
      <Team ref={teamRef} />
      <Services ref={servicesRef} />
      <Footer ref={footerRef} />
    </div>
  );
};

export default Home;
