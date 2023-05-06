import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link_primary', () => {
    renderTheme(<MenuLink link_primary="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });

  it('should render a link_primary with target _self', () => {
    renderTheme(<MenuLink link_primary="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
  });

  it('should render a link_primary with target _blank', () => {
    renderTheme(
      <MenuLink link_primary="https://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
  });

  it('should render a link_primary with correctly href', () => {
    renderTheme(<MenuLink link_primary="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('href', 'https://localhost');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
