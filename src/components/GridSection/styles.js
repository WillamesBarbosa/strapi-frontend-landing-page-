import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.font.spacings.xbig};
      margin-top: ${theme.font.spacings.xbig};
      font-size: ${theme.font.spacings.small};

      & > ${HeadingContainer} {
        font-size: ${theme.font.size.small};
      }
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.font.spacings.big};
    overflow: hidden;
    margin: auto;
    width: 80%;
    @media ${theme.mediaQuerie.mediumQuerie} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      font-size: ${theme.font.size.medium};
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;
