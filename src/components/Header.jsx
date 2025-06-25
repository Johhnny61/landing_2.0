import React, { useState } from 'react';
import styled from 'styled-components';

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'models', label: 'Модели' },
  { id: 'steps', label: 'Как мы работаем' },
  { id: 'contacts', label: 'Контакты' },
];

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e5e5e5;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 72px;

  @media (max-width: 600px) {
    padding: 0 16px;
    height: 56px;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: -0.03em;
  color: #000;
`;

const Menu = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 900px) {
    gap: 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: #1D1D1D;
  background: none;
  border: none;
  padding: 8px 0;
  transition: color 0.2s;

  &:hover {
    color: #0070f3;
  }
`;

const OrderBtn = styled.button`
  background: #000;
  color: #fff;
  border-radius: 8px;
  padding: 10px 22px;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 24px;
  transition: background 0.2s;

  &:hover {
    background: #1D1D1D;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const Burger = styled.button`
  display: none;

  @media (max-width: 700px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    color: #1D1D1D;
  }
`;

const MobileMenu = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 55px;
  left: 0;
  width: 100vw;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid #e5e5e5;
  z-index: 99;
  align-items: center;
  padding: 16px 0;

  @media (min-width: 701px) {
    display: none;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Nav>
          <Logo>SchoolTex</Logo>

          <Menu>
            {navItems.map((item) => (
              <MenuItem key={item.id}>
                <MenuButton onClick={() => handleScroll(item.id)}>{item.label}</MenuButton>
              </MenuItem>
            ))}
          </Menu>

          <OrderBtn onClick={() => handleScroll('order')}>Заказать пошив</OrderBtn>

          <Burger onClick={() => setOpen(!open)} aria-label="Открыть меню">☰</Burger>
        </Nav>
      </HeaderWrapper>

      <MobileMenu open={open}>
        {navItems.map((item) => (
          <MenuItem key={item.id}>
            <MenuButton onClick={() => handleScroll(item.id)}>{item.label}</MenuButton>
          </MenuItem>
        ))}
        <MenuItem>
          <OrderBtn onClick={() => handleScroll('order')}>Заказать пошив</OrderBtn>
        </MenuItem>
      </MobileMenu>
    </>
  );
};

export default Header;