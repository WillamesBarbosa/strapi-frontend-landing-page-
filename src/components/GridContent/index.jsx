import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../BackgroundContainer/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground backgroundColor={background}>
      <Styled.Container>
        <Heading as="h2" uppercase colorDark={!background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
