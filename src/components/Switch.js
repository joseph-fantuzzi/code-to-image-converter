import React, { useState } from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  background-color: gray;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 25px;
  border-radius: 20px;
  cursor: pointer;
`;

const Button = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 5px;
  left: ${(props) => (props.dark ? "20px" : "5px")};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Switch = () => {
  const [dark, setDark] = useState(false);
  return (
    <SwitchContainer onClick={() => setDark(!dark)}>
      <Button dark={dark} />
    </SwitchContainer>
  );
};

export default Switch;
