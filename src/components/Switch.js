import React from "react";
import styled from "styled-components";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

const SwitchContainer = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "white" : "gray")};
  position: absolute;
  top: 30px;
  right: 30px;
  width: 55px;
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Button = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "black" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: ${(props) => (props.theme === "dark" ? "25px" : "5px")};
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Switch = ({ theme, themeToggler }) => {
  return (
    <SwitchContainer theme={theme} onClick={() => themeToggler()}>
      <Button theme={theme}>
        {theme === "dark" ? <MdOutlineDarkMode size={18} /> : <MdOutlineWbSunny size={18} />}
      </Button>
    </SwitchContainer>
  );
};

export default Switch;
