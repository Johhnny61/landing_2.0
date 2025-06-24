import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #000;
  color: #fff;
  overflow: hidden;
`;
const BgImg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  filter: grayscale(1) brightness(0.5);
`;
const Content = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 36px;
  font-weight: 500;
  color: #fff;
  opacity: 0.9;
`;
const CTA = styled.button`
  background: #fff;
  color: #000;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 14px 32px;
  border: none;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);
  &:hover {
    background: #1D1D1D;
    color: #fff;
  }
`;

const Hero = () => (
  <HeroSection id="hero">
    <BgImg />
    <Content
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Производство школьной формы под заказ</Title>
      <Subtitle>Быстро. Качественно. С гарантией.</Subtitle>
      <CTA onClick={() => {
        const el = document.getElementById('order');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}>
        Получить предложение
      </CTA>
    </Content>
  </HeroSection>
);

export default Hero; 