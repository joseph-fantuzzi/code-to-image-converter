import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { RxImage } from "react-icons/rx";
import { BsClipboardPlus, BsClipboardCheck } from "react-icons/bs";
import { SiSvg } from "react-icons/si";

const ExportIconContainer = styled.div`
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff"};
  border: ${(props) => (props.theme === "dark" ? "2px solid gray" : "2px solid #e2e8ec")};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }

  &:hover {
    border: 2px solid #c1bdbd;
    background-color: #c1bdbd;
  }
`;

const ExportDropDownContainer = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  z-index: 10;
  position: absolute;
  right: 0;
  top: 45px;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #e2e8ec;
  border-radius: 8px;
  padding: 0;
  color: #484848;
`;

const Option = styled.div`
  font-weight: 300;
  font-size: 0.9em;
  padding: 0.8em 1em;
  cursor: pointer;
  display: flex;
  gap: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c1bdbd;
  }
`;

const ExportDropDown = ({
  handlePngExport,
  handleSvgExport,
  handleJpegExport,
  handleCopyImageExport,
  exportDropDown,
  setExportDropDown,
  theme,
}) => {
  const [check, setCheck] = useState(false);

  const handleSaveClick = (e, option) => {
    e.stopPropagation();
    if (option.name === "Copy Image") {
      option.function();
      setCheck(true);
    } else {
      option.function();
    }
  };

  const handlExportIconClick = () => {
    setExportDropDown(!exportDropDown);
    setCheck(false);
  };

  return (
    <ExportDropDownContainer>
      <ExportIconContainer theme={theme} onClick={handlExportIconClick}>
        <BiChevronDown size={35} />
      </ExportIconContainer>
      {exportDropDown && (
        <DropDown>
          {[
            {
              name: "Save as PNG",
              function: handlePngExport,
              icon: <RxImage size={18} />,
              check: null,
            },
            {
              name: "Save as JPEG",
              function: handleJpegExport,
              icon: <RxImage size={18} />,
              check: null,
            },
            {
              name: "Save as SVG",
              function: handleSvgExport,
              icon: <SiSvg size={18} />,
              check: null,
            },
            {
              name: "Copy Image",
              function: handleCopyImageExport,
              icon: <BsClipboardPlus size={18} />,
              check: <BsClipboardCheck size={18} />,
            },
          ].map((option, i) => {
            return (
              <Option key={i} onClick={(e) => handleSaveClick(e, option)}>
                {option.check !== null ? (check ? option.check : option.icon) : option.icon}
                <p>{option.name}</p>
              </Option>
            );
          })}
        </DropDown>
      )}
    </ExportDropDownContainer>
  );
};

export default ExportDropDown;
