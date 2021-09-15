import styled from "styled-components";

export const StyledInput = styled.input<ThemeProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "35px"};
  border: none;
  font-family: Electrolize, Helvetica, sans-serif;
  background-color: ${(props) =>
    props.darkMode
      ? props.theme.dark.background
      : props.theme.light.background};
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
  padding: 0 10px;
  box-shadow: inset 2px 2px 0 0 #000;

  &:focus {
    outline: 2px solid #000;
  }
`;
