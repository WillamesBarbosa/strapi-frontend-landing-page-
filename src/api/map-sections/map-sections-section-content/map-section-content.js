export const mapSectionContent = (sections = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id = '' } = false,
  } = sections;

  return {
    component,
    title,
    html,
    background,
    section_id,
  };
};
