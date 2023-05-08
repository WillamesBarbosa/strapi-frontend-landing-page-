import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.font.spacings.big};
    padding: ${theme.font.spacings.big};
    width: 85%;
    margin: auto;

    @media ${theme.mediaQuerie.mediumQuerie} {
      grid-template-columns: 1fr;
    }

    & ${Title} {
      margin-bottom: ${theme.font.spacings.big};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.mediaQuerie.mediumQuerie} {
      margin-bottom: ${theme.font.spacings.big};
    }
  `}
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;
