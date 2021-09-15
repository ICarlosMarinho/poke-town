import React, { useContext } from "react";

import { ErrorTitle, StyledButton } from "./style";
import AppContext from "../../hooks/AppContext";
import { fetchPokemon } from "../../services";

const FetchErrorMsg = () => {
  const { setLoading, setFetchError, setPokemon } = useContext(AppContext);

  const handleClick = () => {
    setFetchError(false);

    const id = Math.floor(Math.random() * 898 + 1);

    fetchPokemon(id, setPokemon, setLoading, setFetchError);
  };

  return (
    <>
      <ErrorTitle>Error ao buscar pokémon</ErrorTitle>
      <StyledButton onClick={handleClick}>Tentar Novamente</StyledButton>
    </>
  );
};

export default FetchErrorMsg;
