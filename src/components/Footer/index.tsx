import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";

import { FooterContainer } from "./style";
import Button from "../Button";

const Footer: FC = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <FooterContainer darkMode={darkMode}>
      <strong>Carlos Marinho</strong>
      <Button width="105px" onClick={handleClick}>{`Tema ${
        darkMode ? "Claro" : "Escuro"
      }`}</Button>
    </FooterContainer>
  );
};

export default Footer;
