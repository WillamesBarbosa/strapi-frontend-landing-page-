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
    expect(data.description).toBe('abc');
    expect(data.section_id).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should render grid text even without having data', () => {
    const data = mapSectionGridText();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.description).toBe('');
    expect(data.section_id).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });
});
