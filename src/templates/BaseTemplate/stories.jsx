import { BaseTemplate } from '.';

import { GridText } from '../../components/GridSection';
import mockGrid from '../../components/GridSection/mock';
import links from '../../components/NavLinks/mock';

export const mockBase = {
  children: (
    <>
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
    </>
  ),
  links: links,
  logoData: {
    text: 'logo',
    link: '#target',
    src: '',
  },
};

export default {
  title: 'Template/BaseTemplate',
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
