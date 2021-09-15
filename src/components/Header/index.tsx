import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";

import { DarkModeButton, HeaderContainer } from "./style";

const Header: FC = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  const handleClick = () => {
    if (setDarkMode) setDarkMode(!darkMode);
  };

  return (
    <HeaderContainer darkMode={darkMode}>
      <DarkModeButton onClick={handleClick}>Theme</DarkModeButton>
    </HeaderContainer>
  );
};

export default Header;
