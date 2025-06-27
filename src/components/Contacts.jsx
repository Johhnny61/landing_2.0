import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
`;
const List = styled.ul`
  font-size: 0.98rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0 0 7px 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Icon = styled.span`
  font-size: 1.15rem;
  color: #0070f3;
  min-width: 1.7em;
  text-align: center;
`;
const Link = styled.a`
  color: #1D1D1D;
  text-decoration: underline;
  transition: color 0.2s;
  word-break: break-all;
  font-size: 0.98rem;
  &:hover {
    color: #0070f3;
  }
`;
const MessengerLink = styled(Link)`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  margin-left: -2px;
  background: ${({ type }) =>
    type === 'wa' ? '#25D36622' : type === 'tg' ? '#229ED922' : '#f7f8fa'};
  color: ${({ type }) =>
    type === 'wa' ? '#25D366' : type === 'tg' ? '#229ED9' : '#1D1D1D'};
  border: 1px solid
    ${({ type }) =>
      type === 'wa' ? '#25D36644' : type === 'tg' ? '#229ED944' : '#e5e5e5'};
  font-size: 0.98rem;
  &:hover {
    background: ${({ type }) =>
      type === 'wa' ? '#25D36633' : type === 'tg' ? '#229ED933' : '#e5e5e5'};
    color: #fff;
    border-color: ${({ type }) =>
      type === 'wa' ? '#25D366' : type === 'tg' ? '#229ED9' : '#0070f3'};
  }
`;

const Contacts = () => (
  <div style={{ width: '100%' }}>
    <Title>Контакты</Title>
    <List>
      <Item>
        <Icon>🏢</Icon>
        <span>SchoolTex</span>
      </Item>
      <Item>
        <Icon>📍</Icon>
        <Link href="https://go.2gis.com/HMP5G">г. Бишкек, ул. Усенбаева, 106, ТЦ Берен Голд, цокольный этаж</Link>
      </Item>
      <Item>
        <Icon>📞</Icon>
        <Link href="tel:+996550997709">+996 550 997 709</Link>
      </Item>
      <Item>
        <Icon>✉️</Icon>
        <Link href="mailto:info@schooltex.kg">info@schooltex.kg</Link>
      </Item>
      <Item>
        <Icon>💬</Icon>
        <MessengerLink href="https://wa.me/79585832213" target="_blank" rel="noopener noreferrer" type="wa">WhatsApp</MessengerLink>
      </Item>
      <Item>
        <Icon>📲</Icon>
        <MessengerLink href="https://t.me/mythical_god" target="_blank" rel="noopener noreferrer" type="tg">Telegram</MessengerLink>
      </Item>
    </List>
  </div>
);

export default Contacts; 