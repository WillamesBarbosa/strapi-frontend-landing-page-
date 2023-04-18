import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is not data', () => {
    const pageData = mapData()[0];
    expect(pageData.footer_text).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });

  it('should map data even if there are data', () => {
    const pageData = mapData([
      {
        footer_text: '<p>Hey</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];
    expect(pageData.footer_text).toBe('<p>Hey</p>');
    expect(pageData.slug).toBe('slug');
    expect(pageData.title).toBe('title');
  });
});
