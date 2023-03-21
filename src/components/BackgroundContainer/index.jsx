import P from 'prop-types';
import * as Styled from './styles';

export const SectionBackground = ({ children, backgroundColor = false }) => {
  return <Styled.Container backgroundColor={backgroundColor}>{children}</Styled.Container>;
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  backgroundColor: P.bool,
};
