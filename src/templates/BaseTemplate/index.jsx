import P from 'prop-types';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { GoTop } from '../../components/GoTop';

export const BaseTemplate = ({ children, links, logoData }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html="Este é o footer" />
      </Styled.Container>
      <GoTop />
    </>
  );
};

BaseTemplate.propTypes = {
  children: P.arrayOf(),
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
  ...Menu.propTypes,
};
