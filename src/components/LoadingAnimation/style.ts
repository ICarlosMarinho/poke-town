import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`

  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(720deg) scale(1.5);
  }

  100% {
    transform: rotate(1440deg) scale(1);
  }
`;

export const LoadingImg = styled.img`
  width: 120px;
  height: auto;
  animation: ${spinAnimation} 3s cubic-bezier(0.6, 0.2, 0.3, 0.6) infinite;
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(5px);
`;
