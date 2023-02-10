import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Switch from "./components/Switch";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

const Container = styled.div`
  min-height: 100vh;
`;

const NavContainer = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  min-height: calc(100vh - 43.188px);
`;

const Footer = styled.footer`
  text-align: center;
  font-weight: 200;
  font-size: 0.9em;
  padding: 1em;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 3em 0;
  margin: 0 5%;
  max-width: 864px;

  @media (min-width: 800px) {
    margin: 0 17.5%;
  }
`;

const Header = styled.div`
  margin-left: 1.5em;

  @media (min-width: 800px) {
    margin-left: 3em;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
  margin-bottom: 0.2em;

  @media (min-width: 800px) {
    font-size: 2.5em;
  }
`;

const Description = styled.p`
  font-size: 0.8em;

  @media (min-width: 800px) {
    font-size: 1em;
  }
`;

function App() {
  const [exportDropDown, setExportDropDown] = useState(false);
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container onClick={() => (exportDropDown ? setExportDropDown(false) : null)}>
        <Switch theme={theme} themeToggler={themeToggler} />
        <InnerContainer>
          <NavContainer>
            <Nav>
              <Logo />
              <Header>
                <Title>Zitrous</Title>
                <Description>An all-in-one code to styled image converter.</Description>
              </Header>
            </Nav>
          </NavContainer>
          <Main
            exportDropDown={exportDropDown}
            setExportDropDown={setExportDropDown}
            theme={theme}
          />
        </InnerContainer>
        <Footer>
          <p>Designed and Created By Joseph Fantuzzi 2022-2023</p>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
