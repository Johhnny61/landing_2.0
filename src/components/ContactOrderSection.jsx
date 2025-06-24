import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';
import OrderForm from './OrderForm';

const Section = styled.section`
  padding: 80px 0 40px 0;
  background: #fafbfc;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06);
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 18px 24px 18px;
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 24px;
    padding: 20px 8px;
  }
`;

const Col = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  min-width: 220px;
`;

const ContactOrderSection = () => {
  const mapRef = useRef();

  useEffect(() => {
    if (window.DG && mapRef.current) {
      window.DG.then(() => {
        const map = DG.map(mapRef.current, {
          center: [42.876561, 74.61307],
          zoom: 16,
        });
        DG.marker([42.876561, 74.61307])
          .addTo(map)
          .bindPopup('Бишкек, ул. Усенбаева, 106, ТЦ Берен Голд');
      });
    }
  }, []);

  return (
    <Section id="contacts">
      <Box>
        <Col>
          <Contacts />
        </Col>
        <Col>
          <MapContainer ref={mapRef} />
        </Col>
        <Col>
          <OrderForm />
        </Col>
      </Box>
    </Section>
  );
};

export default ContactOrderSection;