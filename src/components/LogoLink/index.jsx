import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading/index';

export const LogoLink = ({ text, src = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {src && <img src={src} alt={text} />}
        {!src && <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  src: P.string,
  link: P.string.isRequired,
};
