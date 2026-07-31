import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Capabilities from "../components/Capabilities";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Services />
      <Capabilities />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;