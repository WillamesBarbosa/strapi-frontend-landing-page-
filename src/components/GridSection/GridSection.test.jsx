import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';

describe('<GridText />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
