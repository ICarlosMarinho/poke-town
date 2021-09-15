import React, { FC, useEffect, useContext } from "react";

import { HomeContainer, MainContainer } from "./style";
import PokemonCard from "../../components/PokemonCard";
import { fetchPokemon } from "../../services";
import AppContext from "../../hooks/AppContext";
import Header from "../../components/Header";
import LoadingAnimation from "../../components/LoadingAnimation";
import Footer from "../../components/Footer";

const Home: FC = () => {
  const { pokemon, setPokemon, darkMode, setLoading, setFetchError } =
    useContext(AppContext);

  useEffect(() => {
    const id = Math.floor(Math.random() * 898 + 1);

    fetchPokemon(id, setPokemon, setLoading, setFetchError);
  }, []);

  return (
    <HomeContainer>
      <Header />
      <MainContainer darkMode={darkMode}>
        <PokemonCard pokemon={pokemon} />
        <LoadingAnimation />
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
