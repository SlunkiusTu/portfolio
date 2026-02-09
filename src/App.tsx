import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ContactSection } from './sections/contact/ContactSection';
import { HeroSection } from './sections/hero/HeroSection';
import { ProjectsSection } from './sections/projects/ProjectsSection';
import { AboutMeSection } from './sections/about/AboutSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
