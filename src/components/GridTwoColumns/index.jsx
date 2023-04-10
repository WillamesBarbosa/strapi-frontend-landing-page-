import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../BackgroundContainer/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground backgroundColor={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading as="h2" uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
