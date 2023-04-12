import styled, { css } from 'styled-components';

const handleChangeBackgroundColor = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, backgroundColor }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${backgroundColor && handleChangeBackgroundColor(theme)}
    min-height: 100vh;
    padding: 5rem;
  `}
`;
