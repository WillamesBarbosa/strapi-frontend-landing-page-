import { mapSectionGridImage } from './map-grid-image';

describe('map sections', () => {
  it('should render grid text even without having data', () => {
    const data = mapSectionGridImage();

    expect(data.background).toBe(false);
    expect(data.componentType).toBe('section.section-grid-image');
    expect(data.component).toBe('');
    expect(data.description).toBe('');
    expect(data.section_id).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should render grid text having data', () => {
    const data = mapSectionGridImage({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description: 'Distinctio.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
            hash: '360x360_r_1_6a2049d13a',
            ext: '',
            mime: 'image/jpeg',
            url: 'a.jpg',
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_6a2049d13a',
                mime: 'image/jpeg',
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_6a2049d13a.jpg',
              },
            },
          },
        },
        {
          image: {
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Um livro grande aberto',
            mime: 'image/jpeg',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_c073b11d09',
                ext: '',
                mime: 'image/jpeg',
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_c073b11d09.jpg',
              },
            },
          },
        },
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
      _id: '602fdf2d540c00269e056175',
      description: 'Distinctio.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {},
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
    expect(data.componentType).toBe('section.section-grid-image');
    expect(data.component).toBe('section.section-grid');
    expect(data.description).toBe('Distinctio.');
    expect(data.section_id).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe('');
    expect(data.grid[0].srcImg).toBe('');
  });
});
