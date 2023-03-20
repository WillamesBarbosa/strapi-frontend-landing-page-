import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render correctly', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const paragraph = screen.getByText('Children');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.size.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
