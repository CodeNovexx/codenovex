import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Aboutus from "../components/Aboutus";
import Team from "../components/Team";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Aboutus />
      <Team />
      <Services/>
      <Footer />
    </div>
  );
};

export default Home;
