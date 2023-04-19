import { mapSections } from '../map-sections/map-sections';
import { mapMenu } from '../map-menu/map-menu';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footer_text = '', slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footer_text,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
