export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footer_text = '', slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footer_text,
      slug,
      title,
      sections,
      menu,
    };
  });
};
