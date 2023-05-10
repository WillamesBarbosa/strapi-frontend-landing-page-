export const mapTwoColumns = (sections = {}) => {
  const {
    __component: component = '',
    title,
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: { background = false, section_id = '' } = false,
  } = sections;

  return {
    component,
    text,
    srcImg,
    background,
    section_id,
    title,
  };
};
