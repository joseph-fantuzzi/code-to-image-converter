import React from "react";
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
  border: 2px solid #e2e8ec;
  padding: 0.7em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border: 2px solid #dc4b4b;
    background-color: #dc4b4b3e;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
  margin-right: 0.3em;
`;

const ExportButton = () => {
  return (
    <ButtonContainer>
      <Button>
        <Text>Export</Text>
        <CgSoftwareDownload fontSize={30} />
      </Button>
    </ButtonContainer>
  );
};

export default ExportButton;
