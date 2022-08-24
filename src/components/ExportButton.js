import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CgSoftwareDownload } from "react-icons/cg";

const ButtonContainer = styled.div`
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    margin-left: 4em;
    margin-bottom: 0;
  }
`;

const Button = styled.div`
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 8px;
  padding: 0.4em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffdf70;
  }

  @media (min-width: 800px) {
    padding: 0.7em 1em;
  }
`;

const Text = styled.p`
  font-size: 0.9em;
  margin-right: 0.3em;

  @media (min-width: 800px) {
    font-size: 1.2em;
  }
`;

const ExportButton = ({ handleExport }) => {
  const [fontSize, setFontSize] = useState(20);

  useEffect(() => {
    getFontSize();
  }, []);

  const getFontSize = () => {
    if (window.matchMedia("(min-width: 800px)").matches) {
      setFontSize(30);
    } else {
      setFontSize(20);
    }
  };

  window.addEventListener("resize", () => {
    getFontSize();
  });

  return (
    <ButtonContainer>
      <Button onClick={handleExport}>
        <Text>Export</Text>
        <CgSoftwareDownload fontSize={fontSize} />
      </Button>
    </ButtonContainer>
  );
};

export default ExportButton;
