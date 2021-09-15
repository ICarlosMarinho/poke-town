import React, { FC, useContext } from "react";

import { LoadingImg, AnimationContainer } from "./style";
import Pokeball from "../../../assets/pokeball.svg";
import AppContext from "../../hooks/AppContext";

const LoadingAnimation: FC = () => {
  const { loading } = useContext(AppContext);
  const renderLoadingAnimation = () => (
    <AnimationContainer>
      <LoadingImg src={Pokeball} />
    </AnimationContainer>
  );

  return loading ? renderLoadingAnimation() : null;
};

export default LoadingAnimation;
