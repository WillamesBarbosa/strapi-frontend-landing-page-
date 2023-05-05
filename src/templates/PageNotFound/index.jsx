import * as Styled from './styles';

import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <GridContent
        background
        title="Página não encontrada"
        html="<p>Sentimos muito mas a página não foi encontrada</p>"
      />
    </Styled.Container>
  );
};
