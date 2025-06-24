import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: 'Inter', 'SF Pro Display', Arial, sans-serif;
    background: #fff;
    color:rgb(0, 0, 0);
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  body {
    line-height: 1.5;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
  }
  ul, ol {
    list-style: none;
  }
  button {
    font-family: inherit;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    transition: background 0.2s, color 0.2s;
  }
`; 