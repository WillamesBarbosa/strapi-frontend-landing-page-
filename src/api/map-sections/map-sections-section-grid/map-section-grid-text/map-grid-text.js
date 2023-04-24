export const mapSectionGridText = (sections = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id = '' } = false,
    text_grid: grid = [],
  } = sections;

  return {
    component,
    title,
    description,
    background,
    section_id,
    grid,
  };
};
