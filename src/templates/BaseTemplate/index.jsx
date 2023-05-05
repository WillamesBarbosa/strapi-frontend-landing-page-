import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu/index';
import { Footer } from '../../components/Footer/index';
import { GoTop } from '../../components/GoTop/index';

export const BaseTemplate = ({ links = [], logoData, html, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={html} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

BaseTemplate.propTypes = {
  children: P.node,
  ...Menu.propTypes,
  html: P.string,
};
