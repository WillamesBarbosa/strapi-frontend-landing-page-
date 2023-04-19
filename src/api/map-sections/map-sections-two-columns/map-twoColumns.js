export const mapTwoColumns = (sections = {}) => {
  const {
    __component: component = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id = '' } = false,
  } = sections;

  return {
    component,
    text,
    srcImg,
    background,
    section_id,
  };
};
