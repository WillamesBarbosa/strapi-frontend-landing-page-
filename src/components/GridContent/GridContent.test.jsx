import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    renderTheme(<GridContent {...mock} />);
    expect(screen.getByRole('heading', { name: 'Title Text' })).toBeInTheDocument();
  });

  it('should render grid content dark', () => {
    renderTheme(<GridContent {...mock} background={true} />);
    expect(screen.getByRole('heading', { name: 'Title Text' })).toBeInTheDocument();
  });

  it('should render grid content light', () => {
    renderTheme(<GridContent {...mock} background={false} />);
    expect(screen.getByRole('heading', { name: 'Title Text' })).toBeInTheDocument();
  });

  it('should render grid content undefined', () => {
    renderTheme(<GridContent {...mock} background={undefined} />);
    expect(screen.getByRole('heading', { name: 'Title Text' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
