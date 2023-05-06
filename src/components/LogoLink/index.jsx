import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading/index';

export const LogoLink = ({ children, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {srcImg && <img src={srcImg} alt={children} />}
        {!srcImg && <span>{children}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  children: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
