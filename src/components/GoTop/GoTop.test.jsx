import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render <GoTop />', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
  });

  it('should find a href', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTop>Children</GoTop>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
