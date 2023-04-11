import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';
import { screen } from '@testing-library/react';

describe('<GridImage />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render GridImage dark', () => {
    renderTheme(<GridImage {...mock} background={true} />);
    expect(screen.getByAltText('Teste 1')).toBeInTheDocument();
  });

  it('should render GridImage undefined background', () => {
    renderTheme(<GridImage {...mock} background={undefined} />);
    expect(screen.getByAltText('Teste 1')).toBeInTheDocument();
  });

  it('should render GridImage light', () => {
    renderTheme(<GridImage {...mock} background={false} />);
    expect(screen.getByAltText('Teste 1')).toBeInTheDocument();
  });
});
