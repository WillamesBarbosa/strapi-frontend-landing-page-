import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/index';
import { Title as Heading } from '../Heading/index';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
      background-color: blue;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.mediaQuerie.mediumQuerie} {
      height: 100vh;

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        display: flex;
        padding-bottom: ${theme.font.spacings.xbig};
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${theme.mediaQuerie.mediumQuerie} {
      display: block;
      text-align: center;
      padding: ${theme.font.spacings.big} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    @media ${theme.mediaQuerie.mediumQuerie} {
    }
  `}
`;
