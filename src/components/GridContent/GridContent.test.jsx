import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    renderTheme(<GridContent {...mock} />);
    expect(screen.getByRole('heading', { name: 'Title Text' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
