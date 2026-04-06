import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Members from '../components/sections/Members';
import Experience from '../components/sections/Experience';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Members />
      <Experience />
      <Gallery />
      <Contact />
    </>
  );
}
