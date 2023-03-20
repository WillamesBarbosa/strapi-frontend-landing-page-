import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render', () => {
    renderTheme(<MenuLink>Children</MenuLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
