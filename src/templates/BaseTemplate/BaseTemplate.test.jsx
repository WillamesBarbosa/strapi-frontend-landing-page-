import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate } from '.';

describe('<BaseTemplate />', () => {
  it('should render', () => {
    renderTheme(<BaseTemplate>Children</BaseTemplate>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
