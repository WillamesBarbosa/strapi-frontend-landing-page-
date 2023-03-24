import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/index';
import { LogoLink } from '../LogoLink/index';
import { NavLink } from '../NavLinks/index';

export const Menu = ({ links, logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLink links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLink.protoTypes,
  LogoData: P.shape(LogoLink.propTypes),
};
