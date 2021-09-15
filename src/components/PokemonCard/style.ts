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
`;

export const PokemonName = styled.h3`
  text-transform: capitalize;
`;

export const PokemonImg = styled.img`
  width: 100px;
  height: auto;
`;
