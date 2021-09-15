import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";
import Button from "../Button";
import SearchBar from "../SearchBar";

import { HeaderContainer } from "./style";

const Header: FC = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <HeaderContainer darkMode={darkMode}>
      <h1>Poke Town</h1>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
