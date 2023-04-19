import { mapSectionContent } from './map-sections-section-content/map-section-content';
import { mapSectionGrid } from './map-sections-section-grid/map-section-grid';
import { mapTwoColumns } from './map-sections-two-columns/map-twoColumns';

export const mapSections = (sections = []) => {
  switch (sections.__component) {
    case 'section.section-two-columns':
      return mapTwoColumns(sections);

    case 'section.section-content':
      return mapSectionContent(sections);

    case 'section.section-grid':
      return mapSectionGrid(sections);

    default:
      return [];
  }
};
