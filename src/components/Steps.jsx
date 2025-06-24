import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const steps = [
  'Вы оставляете заявку',
  'Менеджер связывается с вами',
  'Отправляем образцы',
  'Подписываем договор',
  'Запускаем пошив',
];

const StepsSection = styled.section`
  padding: 80px 0 40px 0;
  background: #fff;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
`;
const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const Step = styled(motion.div)`
  background: #f7f7f7;
  border-radius: 12px;
  padding: 32px 20px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
`;
const StepNum = styled.div`
  width: 44px;
  height: 44px;
  margin: 0 auto 14px auto;
  background: #000;
  color: #fff;
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StepText = styled.div`
  font-size: 1.08rem;
  font-weight: 500;
`;

const Steps = () => (
  <StepsSection id="steps">
    <Container>
      <Title>Как мы работаем</Title>
      <StepsGrid>
        {steps.map((step, i) => (
          <Step
            key={step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <StepNum>{i + 1}</StepNum>
            <StepText>{step}</StepText>
          </Step>
        ))}
      </StepsGrid>
    </Container>
  </StepsSection>
);

export default Steps; 