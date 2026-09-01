import './App.css';

import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />

        <Projects />

        <About />

        <Skills />

        <Experience />

        <Contact />
      </main>

    </div>
  );
}

export default App;