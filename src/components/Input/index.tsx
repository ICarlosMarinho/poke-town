import React, { FC, InputHTMLAttributes, useContext } from "react";
import AppContext from "../../hooks/AppContext";

import { StyledInput } from "./style";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  const { darkMode } = useContext(AppContext);
  return <StyledInput darkMode={darkMode} {...rest} />;
};

export default Input;
