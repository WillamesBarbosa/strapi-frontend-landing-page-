export const mapSectionGridText = (sections = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id = '' } = false,
    text_grid: grid = [],
  } = sections;

  // Necessário para receber o tipo do componente no FrontEnd
  const componentType = component ? component + '-text' : 'section.section-grid-text';

  return {
    componentType,
    component,
    title,
    description,
    background,
    section_id,
    grid,
  };
};
