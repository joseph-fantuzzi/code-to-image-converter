import React, { useState, useRef, useCallback } from "react";
import Settings from "./Settings";
import Image from "./Image";
import ExportButton from "./ExportButton";
import styled from "styled-components";
import { toPng } from "html-to-image";

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

  const ref = useRef(null);

  const handleExport = useCallback(() => {
    //  html2canvas(document.querySelector("#capture"))
    //    .then((canvas) => {
    //      canvas.style.display = "none";
    //      document.body.appendChild(canvas);
    //      return canvas;
    //    })
    //    .then((canvas) => {
    //      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    //      const a = document.createElement("a");
    //      a.setAttribute("download", "code.png");
    //      a.setAttribute("href", image);
    //      a.click();
    //      canvas.remove();
    //    });

    //  htmlToImage.toPng(document.getElementById("capture")).then(function (dataUrl) {
    //    download(dataUrl, "code.png");

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
    <div>
      <Container>
        <Settings background={background} setBackground={setBackground} />
        <ExportButton handleExport={handleExport} />
      </Container>
      <div ref={ref}>
        <Image background={background} />
      </div>
    </div>
  );
};

export default Main;
