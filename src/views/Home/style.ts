import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 60px auto 60px;
  grid-template-columns: 100%;
`;

export const MainContainer = styled.main<ThemeProps>`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.darkMode
      ? props.theme.dark.background
      : props.theme.light.background};
`;
