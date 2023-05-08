export const mapSectionGridImage = (sections = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id = '' } = false,
    image_grid: grid = [],
  } = sections;

  // Necessário para receber o tipo do componente no FrontEnd
  const componentType = component ? component + '-image' : 'section.section-grid-image';

  return {
    componentType,
    component,
    title,
    description,
    background,
    section_id,
    grid: grid.map((image) => {
      const { image: { data = [] } = '' } = image;
      const dataUse = data;
      let srcImg = '';
      let altText = '';

      dataUse.map((dataImage) => {
        const {
          attributes: { url = '', alternativeText = '' },
        } = dataImage;

        srcImg = url;
        altText = alternativeText;
      });
      return { srcImg, altText };
    }),
  };
};
