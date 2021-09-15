import React, { useContext } from "react";

import { ErrorTitle, StyledButton } from "./style";
import AppContext from "../../hooks/AppContext";
import { fetchPokemon } from "../../services";

const FetchErrorMsg = () => {
  const { setLoading, setFetchError, setPokemon, searchKey } =
    useContext(AppContext);

  const handleClick = () => {
    setFetchError(false);

    fetchPokemon(searchKey, setPokemon, setLoading, setFetchError);
  };

  return (
    <>
      <ErrorTitle>Error ao buscar pokémon</ErrorTitle>
      <StyledButton onClick={handleClick}>Tentar Novamente</StyledButton>
    </>
  );
};

export default FetchErrorMsg;
