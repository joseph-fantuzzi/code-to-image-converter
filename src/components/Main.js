import React, { useState, useRef, useCallback } from "react";
import Settings from "./Settings";
import Image from "./Image";
import ExportButton from "./ExportButton";
import styled from "styled-components";
import { toPng } from "html-to-image";

const MainContainer = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0 5%;
  align-items: flex-end;
  padding-bottom: 2em;
  position: relative;

  @media (min-width: 800px) {
    margin: 0 17.5%;
    flex-direction: row;
    align-items: center;
  }
`;

const Main = () => {
  const [background, setBackground] = useState("orange/red");
  const [mode, setMode] = useState("dark");
  const [padding, setPadding] = useState("LG");
  const [lang, setLang] = useState("JavaScript");

  const ref = useRef(null);

  const handleExport = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "code.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <MainContainer>
      <Container>
        <Settings
          background={background}
          setBackground={setBackground}
          mode={mode}
          setMode={setMode}
          padding={padding}
          setPadding={setPadding}
          lang={lang}
          setLang={setLang}
        />
        <ExportButton handleExport={handleExport} />
      </Container>
      <div ref={ref}>
        <Image background={background} mode={mode} padding={padding} lang={lang} />
      </div>
    </MainContainer>
  );
};

export default Main;
