import React, { useState } from "react";
import Settings from "./Settings";
import Image from "./Image";
import ExportButton from "./ExportButton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0 5%;
  align-items: flex-end;
  padding-bottom: 2em;

  @media (min-width: 800px) {
    margin: 0 17.5%;
    flex-direction: row;
    align-items: center;
  }
`;

const Main = () => {
  const [background, setBackground] = useState("orange/red");

  return (
    <div>
      <Container>
        <Settings background={background} setBackground={setBackground} />
        <ExportButton />
      </Container>
      <Image background={background} />
    </div>
  );
};

export default Main;
