import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../BackgroundContainer/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export const GridText = ({ title, description, grid, background = false, section_id = '' }) => {
  return (
    <SectionBackground backgroundColor={background} section_id={section_id}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background} uppercase>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((elementGrid) => (
            <Styled.GridElement key={elementGrid.title}>
              <Heading as="h3" colorDark={!background}>
                {elementGrid.title}
              </Heading>
              <TextComponent>{elementGrid.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({ title: P.string.isRequired, description: P.string.isRequired })).isRequired,
  section_id: P.string,
};
