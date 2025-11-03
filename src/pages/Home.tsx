import { useRef } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import Aboutus from "../components/Aboutus";
import Team from "../components/Team";
import Services from "../components/Services";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        aboutRef={aboutRef}
        teamRef={teamRef}
        servicesRef={servicesRef}
        footerRef={contactRef}
      />
      <main className="max-w-[1440px] mx-auto">
        <Aboutus ref={aboutRef} footerRef={contactRef} />
        <Team ref={teamRef} />
        <Services ref={servicesRef} />
      </main>
      <ContactForm ref={contactRef} />
      <Footer ref={footerRef} />
    </>
  );
};

export default Home;
