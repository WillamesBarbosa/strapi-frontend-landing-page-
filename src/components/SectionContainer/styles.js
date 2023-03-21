import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.font.spacings.medium};
    max-width: 120rem;
    margin: 0 auto;
  `}
`;
