import styled from "styled-components";

export const CardContainer = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 5px solid ${(props) => (props.darkMode ? "#fff" : "#000")};
  border-radius: 10px;
  width: max-content;
  padding: 10px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.primary : props.theme.light.primary};
  color: #fff;
`;

export const PokemonInfo = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;
  position: relative;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
`;

export const PokemonImgContainer = styled.div`
  &:hover {
    &::after {
      content: "Clique na imagem para ver a versão shiny!";
      position: absolute;
      left: 5px;
      bottom: 0;
      z-index: 1;
      color: ${(props) => props.theme.light.text};
      font-size: 0.7em;
      background-color: #fff;
      padding: 2px;
      border: 2px solid #000;
    }
  }
`;

export const PokemonImg = styled.img`
  width: 100px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;
