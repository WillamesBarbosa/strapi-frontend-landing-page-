import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLink } from '.';

describe('<NavLink />', () => {
  it('should render', () => {
    renderTheme(<NavLink>Children</NavLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
