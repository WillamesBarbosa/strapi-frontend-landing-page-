import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.size.small};
    }
    text-align: center;
  `}
`;
