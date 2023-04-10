import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../BackgroundContainer/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground backgroundColor={background}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((elementGrid) => (
            <Styled.GridElement key={elementGrid.srcImg}>
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
};
