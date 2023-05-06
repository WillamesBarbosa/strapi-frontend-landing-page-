import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link_primary, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link_primary} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link_primary: P.string.isRequired,
  newTab: P.bool,
};
