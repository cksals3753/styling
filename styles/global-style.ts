import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: "Noto Sans CJK KR";
    font-weight: 500;
    padding-top : 25px;
    overflow: hidden;
  }

  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
  }

  * {
    box-sizing: border-box;
  }
  `