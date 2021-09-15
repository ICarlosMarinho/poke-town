import React, { ChangeEvent, FC, useContext, useState } from "react";
import AppContext from "../../hooks/AppContext";
import Button from "../Button";
import Input from "../Input";

import { SearchBarContainer } from "./style";

const SearchBar: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { setSearchKey, setFetchError } = useContext(AppContext);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setInputValue(evt.target.value);

  const handleClick = () => {
    setSearchKey(inputValue);
    setFetchError(false);
  };

  return (
    <SearchBarContainer>
      <Input
        placeholder="Ex. Squirtle"
        value={inputValue}
        onChange={handleChange}
      />
      <Button disabled={!inputValue.length} onClick={handleClick}>
        Buscar
      </Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
