import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 80px 0 40px 0;
  background: #fff;
  color: #1D1D1D;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
`;
const Desc = styled.p`
  font-size: 1.15rem;
  margin-bottom: 36px;
  max-width: 700px;
`;
const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
`;
const Fact = styled(motion.div)`
  background: #f7f7f7;
  border-radius: 12px;
  padding: 32px 20px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
`;
const FactIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 12px;
`;
const FactText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const facts = [
  { icon: '🏭', text: 'Собственное производство' },
  { icon: '👗', text: 'Более 50 моделей' },
  { icon: '📦', text: 'Заказы от 20 шт' },
  { icon: '🚚', text: 'Доставка по СНГ' },
];

const About = () => (
  <AboutSection id="about">
    <Container>
      <Title>О компании</Title>
      <Desc>
        Мы — современное швейное производство с опытом более 10 лет. Работаем по всему Кыргызстану, предлагаем индивидуальный подход, высокое качество и быструю доставку.
      </Desc>
      <FactsGrid>
        {facts.map((fact, i) => (
          <Fact
            key={fact.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <FactIcon>{fact.icon}</FactIcon>
            <FactText>{fact.text}</FactText>
          </Fact>
        ))}
      </FactsGrid>
    </Container>
  </AboutSection>
);

export default About; 