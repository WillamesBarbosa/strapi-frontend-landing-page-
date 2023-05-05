import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PageNotFound } from '.';

describe('<PageNotFound />', () => {
  it('should render', () => {
    renderTheme(<PageNotFound>Children</PageNotFound>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
