import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { sql } from "@codemirror/lang-sql";
import { php } from "@codemirror/lang-php";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { StreamLanguage } from "@codemirror/language";
import { go } from "@codemirror/legacy-modes/mode/go";
import { json } from "@codemirror/lang-json";
import { cpp } from "@codemirror/lang-cpp";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

const ImageContainer = styled.div`
  width: 90%;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background: ${(props) => {
    if (props.background === "blue") return "#84CBFF;";
    else if (props.background === "green") return "#8BFFA5;";
    else if (props.background === "purple") return "#A0A8F4;";
    else if (props.background === "orange") return "#FEB68E;";
    else if (props.background === "red") return "#FC4646;";
    else if (props.background === "pink") return "#FEC7FF;";
    else if (props.background === "yellow") return "#F2FFA3;";
    else if (props.background === "aqua") return "#6DE3FD;";
    else if (props.background === "orange/red") {
      return "linear-gradient(107.54deg, #FFDF70 7.1%, #980606 91.97%);";
    } else if (props.background === "blue/purple") {
      return "linear-gradient(107.54deg, #15FFE3 7.1%, #4C0067 91.97%);";
    } else if (props.background === "pink/purple") {
      return "linear-gradient(107.54deg, #E588FC 7.1%, #163354 91.97%);";
    } else if (props.background === "green/blue") {
      return "linear-gradient(107.54deg, #69F466 7.1%, #025365 91.97%);";
    } else if (props.background === "purple/dark") {
      return "linear-gradient(107.54deg, #C4BAFF 7.1%, #3E006F 91.97%);";
    } else if (props.background === "gold/dark") {
      return "linear-gradient(107.54deg, #ECCE82 7.1%, #684500 91.97%);";
    } else if (props.background === "yellow/dark") {
      return "linear-gradient(107.54deg, #FCFF51 7.1%, #5B6300 91.97%);";
    } else if (props.background === "red/dark") {
      return "linear-gradient(107.54deg, #F98E8E 7.1%, #590101 91.97%);";
    } else if (props.background === "aqua/dark") {
      return "linear-gradient(107.54deg, #BAFFFB 7.1%, #01504B 91.97%);";
    } else if (props.background === "pink/dark") {
      return "linear-gradient(107.54deg, #FDA5FF 7.1%, #7A0058 91.97%);";
    } else if (props.background === "green/dark") {
      return "linear-gradient(107.54deg, #97FF9B 7.1%, #0B5200 91.97%);";
    } else if (props.background === "blue/dark") {
      return "linear-gradient(107.54deg, #97DAFF 7.1%, #02486F 91.97%);";
    }
  }};

  @media (min-width: 800px) {
    width: 65%;
    height: 550px;
  }
`;
const TextEditor = styled.div`
  width: ${(props) => {
    if (props.padding === "SM") {
      return "96%";
    } else if (props.padding === "MD") {
      return "83%";
    } else if (props.padding === "LG") {
      return "69.5%";
    } else if (props.padding === "XL") {
      return "57%";
    }
  }};
  height: ${(props) => {
    if (props.padding === "SM") {
      return "96%";
    } else if (props.padding === "MD") {
      return "83%";
    } else if (props.padding === "LG") {
      return "69.5%";
    } else if (props.padding === "XL") {
      return "57%";
    }
  }};
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.26);
  border-radius: 24px;
  transition: all 0.3s ease;
  background: ${(props) => {
    if (props.mode === "dark") {
      return "linear-gradient(105.19deg, rgba(0, 0, 0, 0.4725) 0%, rgba(0, 0, 0, 0.63) 101.41%);";
    } else if (props.mode === "light") {
      return "linear-gradient(103.82deg, rgba(255, 255, 255, 0.57) 5.09%, rgba(255, 255, 255, 0.76) 81.57%);";
    }
  }};
`;

const DotContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Dot = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.red ? "#FC4646" : props.yellow ? "#FCB024" : "#29C231")};
  width: 8px;
  height: 8px;

  @media (min-width: 800px) {
    width: 12px;
    height: 12px;
  }
`;

const Filename = styled.input`
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  font-size: 0.6em;
  background: none;
  text-align: center;
  width: auto;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
  color: ${(props) => (props.mode === "dark" ? "#cdcdcd" : "#484848")};

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }

    &:-ms-input-placeholder {
      opacity: 0;
    }

    &::-ms-input-placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: ${(props) => (props.mode === "dark" ? "#cdcdcd" : "#484848")};
    font-weight: 200;
    font-size: 0.8em;

    @media (min-width: 800px) {
      font-size: 1em;
    }
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => (props.mode === "dark" ? "#cdcdcd" : "#484848")};
    font-weight: 200;
    font-size: 0.6em;

    @media (min-width: 800px) {
      font-size: 0.8em;
    }
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => (props.mode === "dark" ? "#cdcdcd" : "#484848")};
    font-weight: 200;
    font-size: 0.6em;

    @media (min-width: 800px) {
      font-size: 0.8em;
    }
  }

  @media (min-width: 800px) {
    font-size: 0.8em;
  }
`;

const FilenameContainer = styled.div`
  max-width: 45%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    max-width: 65%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1em;

  @media (min-width: 800px) {
    padding: 1em 1.5em;
  }
`;

const Icon = styled.div`
  width: 46px;
  height: 3px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.mode === "dark" ? "#cdcdcd" : "#484848")};
`;

const myThemeDark = createTheme({
  dark: "dark",
  settings: {
    background: "linear-gradient(105.19deg, rgba(0, 0, 0, 0.4725) 0%, rgba(0, 0, 0, 0.63) 101.41%)",
    foreground: "#e2e8ec",
    caret: "#e2e8ec",
    selection: "#ffffff30",
    selectionMatch: "#2B323D",
    gutterBackground: "rgba(0, 0, 0, 0)",
    gutterForeground: "rgba(0, 0, 0, 0)",
    gutterBorder: "rgba(0, 0, 0, 0)",
    lineHighlight: "rgba(0, 0, 0, 0)",
  },
  styles: [
    {
      tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
      color: "hsl(207, 82%, 66%)",
    },
    { tag: [t.tagName, t.heading], color: "#e06c75" },
    { tag: t.comment, color: "#54636D" },
    { tag: [t.propertyName], color: "hsl(220, 14%, 71%)" },
    { tag: [t.attributeName, t.number], color: "hsl( 29, 54%, 61%)" },
    { tag: t.className, color: "hsl( 39, 67%, 69%)" },
    { tag: t.keyword, color: "hsl(286, 60%, 67%)" },
    { tag: [t.string, t.regexp, t.special(t.propertyName)], color: "#98c379" },
  ],
});

const myThemeLight = createTheme({
  dark: "light",
  settings: {
    background:
      "linear-gradient(103.82deg, rgba(255, 255, 255, 0.57) 5.09%, rgba(255, 255, 255, 0.76) 81.57%)",
    foreground: "#484848",
    caret: "#484848",
    selection: "#ffffff30",
    selectionMatch: "#2B323D",
    gutterBackground: "rgba(0, 0, 0, 0)",
    gutterForeground: "rgba(0, 0, 0, 0)",
    gutterBorder: "rgba(0, 0, 0, 0)",
    lineHighlight: "rgba(0, 0, 0, 0)",
  },
  styles: [
    {
      tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
      color: "hsl(207, 82%, 66%)",
    },
    { tag: [t.tagName, t.heading], color: "#e06c75" },
    { tag: t.comment, color: "#54636D" },
    { tag: [t.propertyName], color: "hsl(220, 14%, 71%)" },
    { tag: [t.attributeName, t.number], color: "hsl( 29, 54%, 61%)" },
    { tag: t.className, color: "hsl( 39, 67%, 69%)" },
    { tag: t.keyword, color: "hsl(286, 60%, 67%)" },
    { tag: [t.string, t.regexp, t.special(t.propertyName)], color: "#98c379" },
  ],
});

const Image = (props) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const { background, mode, padding, lang } = props;

  const onChange = (e) => {
    e.target.setAttribute("size", e.target.value.length + 14);
    setTitle(e.target.value);
  };

  const getMaxLength = () => {
    if (window.matchMedia("(min-width: 800px)").matches) {
      return 55;
    } else {
      return 20;
    }
  };

  const getHeight = useCallback(() => {
    if (window.matchMedia("(min-width: 800px)").matches) {
      if (padding === "SM") return "450px";
      else if (padding === "MD") return "380px";
      else if (padding === "LG") return "300px";
      else if (padding === "XL") return "240px";
    } else {
      if (padding === "SM") return "320px";
      else if (padding === "MD") return "260px";
      else if (padding === "LG") return "210px";
      else if (padding === "XL") return "160px";
    }
  }, [padding]);

  useEffect(() => {
    getHeight();
  }, [padding, getHeight]);

  const change = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  return (
    <ImageContainer id="capture" background={background}>
      <TextEditor mode={mode} padding={padding}>
        <Header>
          <DotContainer>
            <Dot red></Dot>
            <Dot yellow></Dot>
            <Dot green></Dot>
          </DotContainer>
          <FilenameContainer>
            <Filename
              type="text"
              value={title}
              onChange={onChange}
              placeholder="Untitled"
              maxLength={getMaxLength()}
              mode={mode}
            />
          </FilenameContainer>
          <Icon mode={mode}></Icon>
        </Header>
        {lang === "JavaScript" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, javascript({ jsx: true })]}
            options={{}}
          />
        )}
        {lang === "HTML" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, html()]}
            options={{}}
          />
        )}
        {lang === "CSS" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, css()]}
            options={{}}
          />
        )}
        {lang === "Python" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, python()]}
            options={{}}
          />
        )}
        {lang === "Java" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, java()]}
            options={{}}
          />
        )}
        {lang === "Rust" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, rust()]}
            options={{}}
          />
        )}
        {lang === "SQL" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, sql()]}
            options={{}}
          />
        )}
        {lang === "PHP" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, php()]}
            options={{}}
          />
        )}
        {lang === "Markdown" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[
              EditorView.lineWrapping,
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            options={{}}
          />
        )}
        {lang === "JSON" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, json()]}
            options={{}}
          />
        )}
        {lang === "C++" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, cpp()]}
            options={{}}
          />
        )}
        {lang === "Go" && (
          <CodeMirror
            value={code}
            height={getHeight()}
            className="CodeMirror"
            width="95%"
            onChange={change}
            theme={mode === "dark" ? myThemeDark : myThemeLight}
            extensions={[EditorView.lineWrapping, StreamLanguage.define(go)]}
            options={{}}
          />
        )}
      </TextEditor>
    </ImageContainer>
  );
};

export default Image;
