import P from 'prop-types';

import * as Styled from './styles';

export const Heading = ({ children, colorDark = true, as = 'h1', size = 'xxbig', uppercase = false }) => {
  return (
    <Styled.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['xxbig', 'xbig', 'big', 'medium', 'small', 'xsmall', 'xxsmall']),
  uppercase: P.bool,
};
