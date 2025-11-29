import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-blue-light selection:text-brand-black">
      <Navbar />
      
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>

      
      <div id="projects">
        <Projects />
      </div>
      
     

    </div>
  );
}

export default App;