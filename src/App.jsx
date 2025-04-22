import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gallary from './components/Gallary'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="gallary">
          <Gallary />
        </section>
        <section id="skills">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
