import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    flex-flow: row wrap;

    @media ${theme.mediaQuerie.mediumQuerie} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
