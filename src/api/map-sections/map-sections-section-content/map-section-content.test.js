import { mapSectionContent } from './map-section-content';

describe('map sections', () => {
  it('should map to TwoColumns section even if there is no data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.html).toBe('');
    expect(data.section_id).toBe('');
    expect(data.title).toBe('');
  });

  it('', () => {
    const data = mapSectionContent({
      __component: 'Component Name',
      title: 'title',
      content: 'content',
      metadata: {
        background: true,
        section_id: 'id',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('Component Name');
    expect(data.html).toBe('content');
    expect(data.section_id).toBe('id');
    expect(data.title).toBe('title');
  });
});
