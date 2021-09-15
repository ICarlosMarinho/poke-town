import React, { FC, useContext } from "react";
import AppContext from "../../hooks/AppContext";

import { FooterContainer } from "./style";

const Footer: FC = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <FooterContainer darkMode={darkMode}>
      <strong>Carlos Marinho</strong>
    </FooterContainer>
  );
};

export default Footer;
