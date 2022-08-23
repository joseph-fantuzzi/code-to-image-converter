import "./App.css";
import Logo from "./components/Logo";
import Main from "./components/Main";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
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
  padding: 3em 4em;
`;

const Header = styled.div`
  margin-left: 4em;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 0.2em;
`;

function App() {
  return (
    <Container>
      <InnerContainer>
        <Nav>
          <Logo />
          <Header>
            <Title>Zitrous</Title>
            <p>An all-in-one code to styled image converter.</p>
          </Header>
        </Nav>
        <Main />
      </InnerContainer>
      <Footer>
        <p>Designed and Created By Joseph Fantuzzi</p>
      </Footer>
    </Container>
  );
}

export default App;
