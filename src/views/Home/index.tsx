import React, { FC, useEffect, useContext } from "react";

import { HomeContainer, MainContainer } from "./style";
import PokemonCard from "../../components/PokemonCard";
import { fetchPokemon } from "../../services";
import AppContext from "../../hooks/AppContext";
import Header from "../../components/Header";

const Home: FC = () => {
  const { pokemon, setPokemon, darkMode } = useContext(AppContext);

  useEffect(() => {
    const id = Math.floor(Math.random() * 898 + 1);

    fetchPokemon(id)
      .then((pokemon) => {
        if (setPokemon) setPokemon(pokemon);
      })
      .catch(console.log);
  }, []);

  return (
    <HomeContainer>
      <Header />
      <MainContainer darkMode={darkMode}>
        <PokemonCard pokemon={pokemon} />
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
