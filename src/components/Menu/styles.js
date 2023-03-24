import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/index';
import { Title as Heading } from '../Heading/index';

const menuVisible = (theme) => css`
  opacity: 1;
  visibility: visible;
  border-bottom: ${theme.colors.mediumGray};
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

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
      visibility: hidden;
      opacity: 0;
      ${!!visible && menuVisible(theme)}

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
  ${({ theme, visible }) => css`
      z-index: 6;
      position: fixed;
      top: 2rem;
      right: 2rem;
      width: 4rem;
      height: 4rem;
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      border: none;
      display: none;
      pointer-events: ${visible ? 'none' : 'all'};

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media ${theme.mediaQuerie.mediumQuerie} {
      display: block;

  `}
`;
