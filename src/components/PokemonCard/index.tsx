import React, { FC, useContext, useState } from "react";
import AppContext from "../../hooks/AppContext";
import FetchErrorMsg from "../FetchErrorMsg";

import {
  CardContainer,
  PokemonImg,
  PokemonInfo,
  PokemonName,
  PokemonImgContainer,
} from "./style";

interface Props {
  pokemon: Pokemon | null;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const [shiny, setShiny] = useState(false);
  const { darkMode, fetchError } = useContext(AppContext);

  const handleClick = () => setShiny(!shiny);

  const renderTypes = () => {
    if (pokemon) {
      return pokemon.types.map((type, index) => (
        <span key={index}>{type}</span>
      ));
    }
  };

  const renderAbilities = () => {
    if (pokemon) {
      return pokemon.abilities.map((abilitie, index) => (
        <span key={index}>{abilitie}</span>
      ));
    }
  };

  const renderPokemonInfo = () => {
    return pokemon ? (
      <>
        <PokemonInfo>
          <PokemonImgContainer>
            <PokemonImg
              onClick={handleClick}
              src={shiny ? pokemon.imgShinyUrl : pokemon.imgDefaultUrl}
              alt={`Frontal do pokémon ${pokemon?.name}`}
            />
          </PokemonImgContainer>
          <PokemonName>{pokemon.name}</PokemonName>
        </PokemonInfo>
        <PokemonInfo>
          <strong>Altura</strong>
          <span>{pokemon.height}</span>
          <strong>Peso</strong>
          <span>{pokemon.weight}</span>
        </PokemonInfo>
        <PokemonInfo>
          <strong>Ataque</strong>
          <span>{pokemon.stats.attack}</span>
          <strong>Defesa</strong>
          <span>{pokemon.stats.defense}</span>
          <strong>HP</strong>
          <span>{pokemon.stats.hp}</span>
        </PokemonInfo>
        <PokemonInfo>
          <strong>Habilidades</strong> {renderAbilities()}
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
