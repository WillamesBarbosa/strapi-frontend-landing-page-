import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render children logo', () => {
    renderTheme(<LogoLink link="#target" children="Algo" />);
    const heading = screen.getByRole('heading', { name: 'Algo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" children="Algo" srcImg="image.jpg" />);
    const image = screen.getByAltText('Algo');
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" children="Algo" srcImg="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
