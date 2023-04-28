import { BaseTemplate } from '.';
import mock from './mock';
import gridSectionMock from '../../components/GridSection/mock';
import { GridText } from '../../components/GridSection/index';
import { GridImage } from '../../components/GridImage/index';
import imageSectionMock from '../../components/GridImage/mock';

export const mockBase = {
  children: (
    <>
      <GridText {...gridSectionMock} background />
      <GridImage {...imageSectionMock} />
      <GridText {...gridSectionMock} background />
    </>
  ),
  ...mock,
};

export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
