import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    text-align: center;
    flex-flow: row wrap;

    @media ${theme.mediaQuerie.mediumQuerie} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
