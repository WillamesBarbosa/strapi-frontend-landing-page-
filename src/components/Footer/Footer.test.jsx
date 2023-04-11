import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render Footer', () => {
    renderTheme(<Footer html="<h1>Olá</h1>" />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer>Children</Footer>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
