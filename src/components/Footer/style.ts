import styled from "styled-components";
import { HeaderContainer } from "../Header/style";

export const FooterContainer = styled(HeaderContainer)`
  grid-area: footer;
  border-bottom: none;
  border-top: 5px solid ${(props) => (props.darkMode ? "#fff" : "#000")};

  @media (max-width: 500px) {
    flex-direction: row;
    height: 70px;
  }
`;
