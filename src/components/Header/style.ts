import styled from "styled-components";

export const HeaderContainer = styled.header<ThemeProps>`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.primary : props.theme.light.primary};
  border-bottom: 5px solid ${(props) => (props.darkMode ? "#fff" : "#000")};
`;
