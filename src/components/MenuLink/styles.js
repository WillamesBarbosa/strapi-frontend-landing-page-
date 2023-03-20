import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.a`
  display: block;
  font-size: ${theme.font.size.xsmall};
  padding: ${theme.font.spacings.xsmall};
  text-decoration: none;
  color: ${theme.colors.primaryColor};
  position: relative;
  width: 10rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background-color: ${theme.colors.secondaryColor};
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }
`;
