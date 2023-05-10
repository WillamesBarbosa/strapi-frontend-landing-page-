import P from 'prop-types';
import * as Styled from './styles';

export const SectionBackground = ({ children, backgroundColor = false, section_id = '' }) => {
  return (
    <Styled.Container backgroundColor={backgroundColor} id={section_id}>
      {children}
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  backgroundColor: P.bool,
  section_id: P.string,
};
