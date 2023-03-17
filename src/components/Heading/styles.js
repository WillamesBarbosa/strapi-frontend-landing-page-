import styled, { css } from 'styled-components';

const titleSize = {
  xxsmall: (theme) =>
    css`
      font-size: ${theme.font.size.xxsmall};
    `,
  xsmall: (theme) =>
    css`
      font-size: ${theme.font.size.xsmall};
    `,
  small: (theme) =>
    css`
      font-size: ${theme.font.size.small};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.font.size.medium};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.font.size.big};
    `,
  xbig: (theme) =>
    css`
      font-size: ${theme.font.size.xbig};
    `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme) => css`
  @media ${theme.mediaQuerie.mediumQuerie} {
    font-size: ${theme.font.size.medium};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
    ${mediaFont(theme)}
  `}
`;
