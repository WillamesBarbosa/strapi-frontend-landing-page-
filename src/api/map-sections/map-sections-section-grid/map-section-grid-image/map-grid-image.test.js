import { mapSectionGridImage } from './map-grid-image';

describe('map sections', () => {
  it('should render grid text even without having data', () => {
    const data = mapSectionGridImage();

    expect(data.background).toBe(false);
    expect(data.componentType).toBe('');
    expect(data.component).toBe('');
    expect(data.description).toBe('');
    expect(data.section_id).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should render grid text having data', () => {
    const data = mapSectionGridImage({
      __component: 'section.section-grid',
      description: 'Distinctio.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  name: 'http://source.unsplash.com/random/360x360?r=1',
                  alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
                  url: 'a.jpg',
                },
              },
            ],
          },
        },
        {
          image: {
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Um livro grande aberto',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    expect(data.componentType).toBe('section.section-grid-image');
    expect(data.component).toBe('section.section-grid');
    expect(data.description).toBe('Distinctio.');
    expect(data.section_id).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe('Uma paisagem com céu claro e montanhas bonitas');
    expect(data.grid[0].srcImg).toBe('a.jpg');
  });

  it('should map the grid even if the keys come empty', () => {
    const data = mapSectionGridImage({
      __component: 'section.section-grid',
      description: 'Distinctio.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {},
              },
            ],
          },
        },
        {
          image: {
            data: [{}],
          },
        },
        {},
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    expect(data.componentType).toBe('section.section-grid-image');
    expect(data.component).toBe('section.section-grid');
    expect(data.description).toBe('Distinctio.');
    expect(data.section_id).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe('');
    expect(data.grid[0].srcImg).toBe('');
  });
});
