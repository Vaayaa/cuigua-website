import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Members from './components/Members'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Members />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
