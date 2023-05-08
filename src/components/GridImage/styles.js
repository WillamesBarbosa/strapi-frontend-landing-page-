import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 85%;
    ${TextComponent} {
      margin-bottom: ${theme.font.spacings.xbig};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.font.spacings.big};
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;

    &:hover {
      transform: scale(1.2);
    }
  `}
`;
