import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLink } from '.';
import link from './mock';
import { theme } from '../../styles/theme';

describe('<NavLink />', () => {
  it('should render', () => {
    renderTheme(<NavLink links={link} />);
    expect(screen.getAllByRole('link')).toHaveLength(link.length);
  });

  it('should render not render link', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it('should render', () => {
    renderTheme(<NavLink links={link} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.mediaQuerie.mediumQuerie,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink links={link} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
