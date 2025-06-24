import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Айгуль А.',
    text: 'Очень довольны качеством формы и обслуживанием! Заказ пришёл быстро, всё подошло идеально. Спасибо вашей команде!',
    date: '12.08.2023',
  },
  {
    name: 'Данияр К.',
    text: 'Заказывали форму для класса. Всё на высшем уровне: ткань, пошив, доставка. Будем обращаться ещё!',
    date: '05.09.2023',
  },
  {
    name: 'Мария П.',
    text: 'Спасибо за индивидуальный подход и терпение! Дети в восторге от новой формы.',
    date: '28.08.2023',
  },
  {
    name: 'Сергей В.',
    text: 'Отличный сервис, быстрое оформление заказа и доставка. Рекомендую!',
    date: '15.07.2023',
  },
];

const Section = styled.section`
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
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
`;
const Card = styled(motion.div)`
  background: #fafbfc;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
  padding: 28px 22px 38px 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
`;
const Name = styled.div`
  font-weight: 600;
  font-size: 1.08rem;
  margin-bottom: 4px;
`;
const Date = styled.div`
  font-size: 0.95rem;
  color: #888;
  position: absolute;
  left: 22px;
  bottom: 16px;
`;
const Text = styled.div`
  font-size: 1.08rem;
  line-height: 1.5;
`;
const Stars = styled.div`
  color: #FFD600;
  font-size: 1.25rem;
`;

const Reviews = () => (
  <Section id="reviews">
    <Container>
      <Title>Отзывы клиентов</Title>
      <Grid>
        {reviews.map((r, i) => (
          <Card
            key={r.name + r.date}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <Name>{r.name}</Name>
            <Stars>★★★★★</Stars>
            <Text>“{r.text}”</Text>
            <Date>{r.date}</Date>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Reviews; 