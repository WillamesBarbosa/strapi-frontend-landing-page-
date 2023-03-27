import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn {...mock} />);
    expect(screen.getByRole('heading', { name: 'Title Text' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
