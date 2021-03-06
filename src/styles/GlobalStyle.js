import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${TransitionStyles};
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :focus {
    outline: 2px dashed var(--orange);
    outline-offset: 3px;
  }

  // Remove Focus for mouse users
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  // If focus visible is supported
  :focus-visible {
    outline: 2px dashed var(--orange);
    outline-offset: 3px;
  }

  body {
    background: var(--x-dark-navy);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font-link);
    font-weight: 400;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 75px 0;
    }

    @media (max-width: 480px) {
      padding: 50px 0;
    }
  }

// Scroll Bar
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange);
  }
  body::-webkit-scrollbar {
    width: 11px;
  }
  body::-webkit-scrollbar-track {
    background: var(--x-dark-navy);
  }
  body::-webkit-scrollbar-thumb {
    background: var(--orange);
    opacity: 0.25;
    border: 3px solid var(--x-dark-navy);
    border-radius: 10px;
  }

  .resume__button {
    ${({ theme }) => theme.mixins.smButton};
  } 
  
// Headings
  .section__heading-top {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 10px 0 40px;
    color: var(--orange);
    font-family: var(--font-link);
    font-size: clamp(var(--fs-md), 3vw, var(--fs-lg));
    white-space: nowrap;
    letter-spacing: 3px;

    &:after {
      content: '';
      display: block;
      position: relative;
      color: var(--orange-tint);
      width: 100%;
      height: 1px;
      margin-left: 25px;
      top: 1px;
      background: linear-gradient(103.22deg, #E38229 -13.86%, #E36929 99.55%);

      @media (max-width: 600px) {
        margin-left: 12px;
      }
    }
  }

  .big__subheading {
    
  }

  .small__subheading {

  }

// Gradient Text
  .gradient__text {
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

// BG Gradient
  // https://angrytools.com/gradient/
  .bg__gradient {
    // ff 3.6+
    background:-moz-radial-gradient(circle at 30% 35%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // safari 5.1+,chrome 10+
    background:-webkit-radial-gradient(circle at 30% 35%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // opera 11.10+
    background:-o-radial-gradient(circle at 30% 35%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // ie 10+
    background:-ms-radial-gradient(circle at 30% 35%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // global 92%+ browsers support
    background:radial-gradient(circle at 30% 35%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);
  }

// Box Shadows
  .nav__shadow {
    box-shadow: 0 10px 30px -10px var(--x-dark-navy);
  }
`

export default GlobalStyle;