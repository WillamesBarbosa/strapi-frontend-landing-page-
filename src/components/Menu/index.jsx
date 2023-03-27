import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/index';
import { LogoLink } from '../LogoLink/index';
import { NavLink } from '../NavLinks/index';
import { Menu as MenuIconOpen } from '@styled-icons/material-outlined';
import { Close as MenuIconClose } from '@styled-icons/material-outlined';
import { useState } from 'react';

export const Menu = ({ links, logoData }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close Menu">
        {visible ? <MenuIconClose aria-label="Close Menu" /> : <MenuIconOpen aria-label="Open Menu" />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.protoTypes,
  LogoData: P.shape(LogoLink.propTypes),
};
