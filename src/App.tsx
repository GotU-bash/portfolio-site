import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
