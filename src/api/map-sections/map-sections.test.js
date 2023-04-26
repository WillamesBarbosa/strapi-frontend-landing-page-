import { mapSections } from './map-sections';

import PageFakeData from '../map-data/data.json';

describe('map sections', () => {
  it('should execute mapSections even no having data or no exist', () => {
    const dataEmpty = mapSections();

    expect(dataEmpty).toEqual([]);

    const dataNoExist = mapSections([
      {
        __component: 'section.section-no-exist',
      },
    ]);

    expect(dataNoExist).toEqual([[]]);
  });

  it('should', () => {
    const data = mapSections(PageFakeData[0].sections);

    expect(data[0].background).toBe(true);
  });

  it('should', () => {
    const dataExistButIsEmpty = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    expect(dataExistButIsEmpty).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
  });
});
