import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    margin-left: 4em;
    margin-bottom: 0;
  }
`;

const Button = styled.div`
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff"};
  border: ${(props) => (props.theme === "dark" ? "2px solid gray" : "2px solid #e2e8ec")};
  border-radius: 8px;
  padding: 0.7em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    border: 2px solid #dc766d;
    background-color: #dc766d;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
  font-weight: 300;
`;

const ExportButton = ({ handlePngExport, theme }) => {
  return (
    <ButtonContainer>
      <Button theme={theme} onClick={handlePngExport}>
        <Text>Export</Text>
      </Button>
    </ButtonContainer>
  );
};

export default ExportButton;
