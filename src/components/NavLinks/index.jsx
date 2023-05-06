import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink/index';

export const NavLink = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link_primary: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
