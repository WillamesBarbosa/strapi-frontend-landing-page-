import P from 'prop-types';
import * as Styled from './styles';

const generateId = () => `${parseInt(Math.random() * 10000)}`;

console.log(generateId());

export const SectionBackground = ({ children, backgroundColor = false, section_id = '' }) => {
  const ID = section_id ? section_id : generateId();
  return (
    <Styled.Container backgroundColor={backgroundColor} id={ID}>
      {children}
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  backgroundColor: P.bool,
  section_id: P.string,
};
