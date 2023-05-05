import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Loading } from '.';

describe('<Loading />', () => {
  it('should render', () => {
    renderTheme(<Loading>Children</Loading>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
