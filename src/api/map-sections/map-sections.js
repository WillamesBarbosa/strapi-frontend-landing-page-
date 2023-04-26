import { mapSectionContent } from './map-sections-section-content/map-section-content';
import { mapSectionGridImage } from './map-sections-section-grid/map-section-grid-image/map-grid-image';
import { mapSectionGridText } from './map-sections-section-grid/map-section-grid-text/map-grid-text';
import { mapTwoColumns } from './map-sections-two-columns/map-twoColumns';

export const mapSections = (sections = []) => {
  return sections.map((section) => {
    const { image_grid = [], text_grid = [] } = section;
    switch (section.__component) {
      case 'section.section-two-columns':
        return mapTwoColumns(section);

      case 'section.section-content':
        return mapSectionContent(section);

      case 'section.section-grid':
        if (image_grid.length > 0) {
          return mapSectionGridImage(section);
        }

        if (text_grid.length > 0) {
          return mapSectionGridText(section);
        }

        return section;

      default:
        return [];
    }
  });
};
