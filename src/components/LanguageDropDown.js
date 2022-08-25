import React from "react";
import styled from "styled-components";
import { VscClose } from "react-icons/vsc";

const Container = styled.div`
  width: 15%;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.66);
  border-radius: 19px;
  color: white;
  font-weight: 200;
  font-size: 0.7em;
  padding: 1.5em 1em;
  position: absolute;
  top: 150px;
  right: 70px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 145px;
  max-width: 160px;
  z-index: 1;

  @media (min-width: 800px) {
    top: 90px;
    right: 180px;
  }
`;

const Icon = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;

  &:hover {
    color: #ffdf70;
  }
`;

const LangContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
  font-size: 1.2em;
  margin-top: 0.6em;
  text-align: center;
`;

const Lang = styled.div`
  cursor: pointer;
  border-radius: 8px;
  padding: 0.4em 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const LangSelected = styled.div`
  cursor: pointer;
  border-radius: 8px;
  padding: 0.4em 0;
  transition: all 0.3s ease;
  background-color: white;
  color: black;
`;

const LanguageDropDown = ({ setDropDown, lang, setLang }) => {
  const languages = [
    "C",
    "C++",
    "C#",
    "CSS",
    "Go",
    "HTML",
    "Java",
    "JavaScript",
    "Markdown",
    "PHP",
    "Ruby",
    "Rust",
    "Sass",
    "SQL",
  ];

  const handleClick = (language) => {
    setLang(language);
  };

  return (
    <Container>
      <Icon onClick={() => setDropDown(false)}>
        <VscClose fontSize={20} />
      </Icon>
      <LangContainer>
        {languages.map((language, i) => {
          if (lang === language) {
            return (
              <LangSelected onClick={() => handleClick(language)} key={i}>
                {language}
              </LangSelected>
            );
          } else {
            return (
              <Lang onClick={() => handleClick(language)} key={i}>
                {language}
              </Lang>
            );
          }
        })}
      </LangContainer>
    </Container>
  );
};

export default LanguageDropDown;
