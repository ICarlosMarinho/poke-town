import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";
import Button from "../Button";

import { HeaderContainer } from "./style";

const Header: FC = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <HeaderContainer darkMode={darkMode}>
      <h1>Poke Town</h1>
      <Button onClick={handleClick}>{`Tema ${
        darkMode ? "Claro" : "Escuro"
      }`}</Button>
    </HeaderContainer>
  );
};

export default Header;
