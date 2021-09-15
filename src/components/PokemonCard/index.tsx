import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";
import FetchErrorMsg from "../FetchErrorMsg";

import { CardContainer, PokemonImg, PokemonInfo, PokemonName } from "./style";

interface Props {
  pokemon: Pokemon | null;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { darkMode, fetchError } = useContext(AppContext);

  const renderTypes = () => {
    if (pokemon) {
      return pokemon.types.map((type, index) => (
        <span key={index}>{type}</span>
      ));
    }
  };

  const renderPokemonInfo = () => {
    return pokemon ? (
      <>
        <PokemonInfo>
          <PokemonImg
            src={pokemon.imgUrl}
            alt={`Frontal do pokémon ${pokemon?.name}`}
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
      </>
    ) : null;
  };

  return (
    <CardContainer darkMode={darkMode}>
      {!fetchError ? renderPokemonInfo() : <FetchErrorMsg />}
    </CardContainer>
  );
};

export default PokemonCard;
