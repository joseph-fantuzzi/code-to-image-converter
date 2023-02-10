import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Poppins", sans-serif;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  `;
