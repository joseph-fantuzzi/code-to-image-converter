import React, { useEffect, useRef } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styled from "styled-components";

const ResizeContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-bottom: 2em;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  padding: 0.5em;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c1bdbd;
  }
`;

const Resize = ({ setImageWidth }) => {
  const plusIntervalRef = useRef(null);
  const minusIntervalRef = useRef(null);

  useEffect(() => {
    return () => clearResize("both");
  }, []);

  const handleResize = (sign) => {
    if (plusIntervalRef.current) return;
    if (sign === "plus") {
      plusIntervalRef.current = setInterval(() => {
        setImageWidth((prevWidth) => prevWidth + 1);
      }, 50);
    } else {
      minusIntervalRef.current = setInterval(() => {
        setImageWidth((prevWidth) => prevWidth - 1);
      }, 50);
    }
  };

  const clearResize = (sign) => {
    if (sign === "plus") {
      if (plusIntervalRef.current) {
        clearInterval(plusIntervalRef.current);
        plusIntervalRef.current = null;
      }
    } else if (sign === "minus") {
      if (minusIntervalRef.current) {
        clearInterval(minusIntervalRef.current);
        minusIntervalRef.current = null;
      }
    } else {
      if (plusIntervalRef.current) {
        clearInterval(plusIntervalRef.current);
        plusIntervalRef.current = null;
      }
      if (minusIntervalRef.current) {
        clearInterval(minusIntervalRef.current);
        minusIntervalRef.current = null;
      }
    }
  };

  return (
    <ResizeContainer>
      <Icon
        onMouseDown={() => handleResize("minus")}
        onMouseUp={() => clearResize("minus")}
        onMouseLeave={() => clearResize("minus")}
      >
        <FiMinus size={18} />
      </Icon>
      <Icon
        onMouseDown={() => handleResize("plus")}
        onMouseUp={() => clearResize("plus")}
        onMouseLeave={() => clearResize("plus")}
      >
        <FiPlus size={18} />
      </Icon>
    </ResizeContainer>
  );
};

export default Resize;
