import styled, { css, keyframes } from 'styled-components';
const isRotating = () => keyframes`
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  `;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const loadingBar = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 20rem;
    height: 20rem;
    border: 1rem solid white;
    border-top: 1rem solid ${theme.colors.secondaryColor};
    border-radius: 50%;
    animation: ${isRotating} 0.8s infinite linear;
  `}
`;
