import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';

describe('<GridText />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render GridText dark', () => {
    const { container } = renderTheme(<GridText {...mock} background={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render GridText undefined', () => {
    const { container } = renderTheme(<GridText {...mock} background={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render GridText light', () => {
    const { container } = renderTheme(<GridText {...mock} background={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
