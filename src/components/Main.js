import React, { useState, useCallback, useEffect } from "react";
import download from "downloadjs";
import Settings from "./Settings";
import Image from "./Image";
import Resize from "./Resize";
import ExportButton from "./ExportButton";
import styled from "styled-components";
import { toPng } from "html-to-image";
import useMediaQuery from "../hooks/useMediaQuery";

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
  const isDesktop = useMediaQuery("(min-width: 800px)");
  const [imageWidth, setImageWidth] = useState(65);

  useEffect(() => {
    isDesktop ? setImageWidth(65) : setImageWidth(90);
  }, [isDesktop]);

  const handleExport = useCallback(() => {
    toPng(document.getElementById("capture"), { cacheBust: true, style: { margin: "0px" } })
      .then((dataUrl) => {
        download(dataUrl, "code.png");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <Resize setImageWidth={setImageWidth} />
      <Image
        background={background}
        mode={mode}
        padding={padding}
        lang={lang}
        imageWidth={imageWidth}
      />
    </MainContainer>
  );
};

export default Main;
