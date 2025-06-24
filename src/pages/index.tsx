import About from '../components/About';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import ContactOrderSection from '../components/ContactOrderSection';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        <Hero />
        <About />
        <Gallery />
        <Steps />
        <Reviews />
        <ContactOrderSection />
      </main>
      <footer style={{textAlign:'center',padding:'32px 0',color:'#888'}}>© {new Date().getFullYear()} SchoolTex</footer>
    </>
  );
} 