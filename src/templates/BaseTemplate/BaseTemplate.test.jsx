import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate } from '.';

describe('<BaseTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...BaseTemplate} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
