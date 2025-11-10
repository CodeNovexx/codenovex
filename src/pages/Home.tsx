import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import Aboutus from "../components/Aboutus";
import Team from "../components/Team";
import Services from "../components/Services";
import ScrollToTop from "../components/ScrollToTop";
import { ParallaxBackground } from "../components/ParallaxBackground";
import { ScrollProgress } from "../components/ScrollProgress";
import { StatsGrid } from "../components/StatCounter";
import { Code, Users, Rocket, Award } from "lucide-react";

const Home = () => {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ScrollProgress />
      <ParallaxBackground />
      <Header
        aboutRef={aboutRef}
        teamRef={teamRef}
        servicesRef={servicesRef}
        footerRef={contactRef}
      />
      <main className="max-w-[1440px] mx-auto">
        <Aboutus ref={aboutRef} footerRef={contactRef} />
        
        {/* Stats Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {t("stats.title")}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t("stats.subtitle")}
              </p>
            </div>
            <StatsGrid
              stats={[
                {
                  end: 150,
                  suffix: "+",
                  label: t("stats.projectsCompleted"),
                  icon: <Rocket className="w-8 h-8" />,
                },
                {
                  end: 50,
                  suffix: "+",
                  label: t("stats.happyClients"),
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  end: 500000,
                  suffix: "+",
                  label: t("stats.linesOfCode"),
                  icon: <Code className="w-8 h-8" />,
                },
                {
                  end: 5,
                  suffix: "+",
                  label: t("stats.yearsExperience"),
                  icon: <Award className="w-8 h-8" />,
                },
              ]}
            />
          </div>
        </section>

        <Team ref={teamRef} />
        <Services ref={servicesRef} />
      </main>
      <ContactForm ref={contactRef} />
      <Footer ref={footerRef} />
      <ScrollToTop />
    </>
  );
};

export default Home;
