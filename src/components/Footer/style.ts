import styled from "styled-components";
import { HeaderContainer } from "../Header/style";

export const FooterContainer = styled(HeaderContainer)`
  grid-area: footer;
  justify-content: center;
  border-bottom: none;
  border-top: 5px solid ${(props) => (props.darkMode ? "#fff" : "#000")};
`;
