import styled from "styled-components";

export const StyledButton = styled.button<SizeProps>`
  background-color: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "auto"};
  padding: 10px;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 0 0 #232323;
    right: 2px;
    bottom: 2px;
  }

  &:active {
    box-shadow: none;
    right: 0;
    bottom: 0;
  }
`;
