import styled from "styled-components";

export const HeaderContainer = styled.header<ThemeProps>`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.primary : props.theme.light.primary};
`;

export const DarkModeButton = styled.button`
  background-color: #232323;
  color: #fff;
  font-weight: bold;
  border: none;
  width: 60px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;
