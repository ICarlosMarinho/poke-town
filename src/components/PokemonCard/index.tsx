import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";

import { CardContainer, PokemonImg, PokemonInfo, PokemonName } from "./style";

interface Props {
  pokemon: Pokemon | null;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { darkMode } = useContext(AppContext);

  const renderTypes = () => {
    if (pokemon) {
      return pokemon.types.map((type, index) => (
        <span key={index}>{type}</span>
      ));
    }
  };

  return pokemon ? (
    <CardContainer darkMode={darkMode}>
      <PokemonInfo>
        <PokemonImg
          src={pokemon.imgUrl}
          alt={`Frontal do pokémon ${pokemon.name}`}
        />
        <PokemonName>{pokemon.name}</PokemonName>
      </PokemonInfo>
      <PokemonInfo>
        <strong>Altura</strong>
        <span>{pokemon.height}</span>
      </PokemonInfo>
      <PokemonInfo>
        <strong>Tipo</strong> {renderTypes()}
      </PokemonInfo>
    </CardContainer>
  ) : null;
};

export default PokemonCard;
