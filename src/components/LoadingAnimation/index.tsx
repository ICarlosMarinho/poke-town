import React, { FC } from "react";

import { LoadingImg, AnimationContainer } from "./style";
import Pokeball from "../../../assets/pokeball.svg";

const LoadingAnimation: FC = () => {
  return (
    <AnimationContainer>
      <LoadingImg src={Pokeball} />
    </AnimationContainer>
  );
};

export default LoadingAnimation;
