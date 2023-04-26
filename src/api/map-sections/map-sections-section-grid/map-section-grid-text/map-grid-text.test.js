import { mapSectionGridText } from './map-grid-text';

describe('should render grid text having data', () => {
  it('should map grid text', () => {
    const data = mapSectionGridText({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
        {
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
      ],
      image_grid: [],
      metadata: {
        background: false,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid');
    expect(data.componentType).toBe('section.section-grid-text');
    expect(data.description).toBe('abc');
    expect(data.section_id).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should render grid text even without having data', () => {
    const data = mapSectionGridText();

    expect(data.background).toBe(false);
    expect(data.componentType).toBe('section.section-grid-text');
    expect(data.component).toBe('');
    expect(data.description).toBe('');
    expect(data.section_id).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map the grid even if the keys come empty', () => {
    const data = mapSectionGridText({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description: 'Distinctio.',
      title: 'Gallery',
      image_grid: [],
      text_grid: [
        {
          text: '',
        },
        {},
      ],
      metadata: {
        background: false,
        _id: '602fdf2e540c00269e0561a4',
        name: 'gallery',
        section_id: 'gallery',
        __v: 0,
        id: '602fdf2e540c00269e0561a4',
      },
    });

    expect(data.background).toBe(false);
    expect(data.componentType).toBe('section.section-grid-text');
    expect(data.component).toBe('section.section-grid');
    expect(data.description).toBe('Distinctio.');
    expect(data.section_id).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].title).toBe('');
  });
});
