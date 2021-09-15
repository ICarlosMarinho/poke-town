import React, { FC, ButtonHTMLAttributes } from "react";

import { StyledButton } from "./style";

const Button: FC<SizeProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
