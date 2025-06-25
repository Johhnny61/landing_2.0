import About from '../components/About';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import ContactOrderSection from '../components/ContactOrderSection';
import Reviews from '../components/Reviews';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-top: 72px; /* Высота заголовка для десктопа */

  @media (max-width: 600px) {
    padding-top: 56px; /* Высота заголовка для мобильных устройств */
  }
`;

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        <About />
        <Gallery />
        <Steps />
        <Reviews />
        <ContactOrderSection />
      </StyledMain>
      <footer style={{textAlign:'center',padding:'32px 0',color:'#888'}}>© {new Date().getFullYear()} SchoolTex</footer>
    </>
  );
} 