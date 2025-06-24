import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const models = [
  { name: 'Классический пиджак', category: 'Пиджак', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Юбка-солнце', category: 'Юбка', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Школьный сарафан', category: 'Сарафан', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80' },
  { name: 'Худи для школы', category: 'Худи', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Брюки классика', category: 'Брюки', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Жилет', category: 'Жилет', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
];

const GallerySection = styled.section`
  padding: 80px 0 40px 0;
  background: #fafbfc;
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled(motion.div)`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  }
`;
const ImgWrap = styled.div`
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(.4,2,.6,1);
  filter: grayscale(0.2);
  ${Card}:hover & {
    transform: scale(1.08);
    filter: grayscale(0);
  }
`;
const CardInfo = styled.div`
  padding: 18px 16px 14px 16px;
`;
const ModelName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 6px;
`;
const Category = styled.div`
  font-size: 0.98rem;
  color: #888;
`;

const Gallery = () => (
  <GallerySection id="models">
    <Container>
      <Title>Галерея моделей</Title>
      <Grid>
        {models.map((m, i) => (
          <Card
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <ImgWrap>
              <Img src={m.img} alt={m.name} />
            </ImgWrap>
            <CardInfo>
              <ModelName>{m.name}</ModelName>
              <Category>{m.category}</Category>
            </CardInfo>
          </Card>
        ))}
      </Grid>
    </Container>
  </GallerySection>
);

export default Gallery; 