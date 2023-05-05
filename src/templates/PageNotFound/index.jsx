import * as Styled from './styles';

import { SectionBackground } from '../../components/BackgroundContainer';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <SectionBackground backgroundColor>
      <Styled.Container>
        <GridContent title="Página não encontrada" html="<p>Sentimos muito mas a página não foi encontrada</p>" />
      </Styled.Container>
    </SectionBackground>
  );
};
