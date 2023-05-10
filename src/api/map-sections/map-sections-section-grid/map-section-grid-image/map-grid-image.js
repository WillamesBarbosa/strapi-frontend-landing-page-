export const mapSectionGridImage = (sections = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id = '' } = {},
    image_grid: grid = [],
  } = sections;

  const componentType = component ? `${component}-image` : '';

  const mappedGrid = grid.map((image) => {
    const { image: { data = [] } = {} } = image;

    let srcImg = '';
    let altText = '';

    data.forEach((dataImage) => {
      const { attributes: { url = '', alternativeText = '' } = {} } = dataImage;

      srcImg = url;
      altText = alternativeText;
    });

    return { srcImg, altText };
  });

  return {
    componentType,
    component,
    title,
    description,
    background,
    section_id,
    grid: mappedGrid,
  };
};
