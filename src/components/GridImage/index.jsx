import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../BackgroundContainer/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export const GridImage = ({ title, description, grid = [], background = false, section_id = '' }) => {
  return (
    <SectionBackground backgroundColor={background} section_id={section_id}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((elementGrid, index) => (
            <Styled.GridElement key={index}>
              <Styled.Image src={elementGrid.srcImg} alt={elementGrid.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({ srcImg: P.string.isRequired, altText: P.string.isRequired })).isRequired,
  section_id: P.string,
};
