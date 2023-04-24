import { mapSectionGridImage } from './map-section-grid-image/map-grid-image';
import { mapSectionGridText } from './map-section-grid-text/map-grid-text';

export const mapSectionGrid = (sections) => {
  const { __component: { image_grid = [], text_grid = [] } = '' } = sections;
  if (image_grid.length > 0) {
    return mapSectionGridImage();
  }

  if (text_grid.length > 0) {
    return mapSectionGridText();
  }
};
