import { mapTwoColumns } from './map-twoColumns';

describe('map sections', () => {
  it('should map to TwoColumns section even if there is no data', () => {
    const data = mapTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.section_id).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
  });

  it('should map the TwoColumns section with data', () => {
    const data = mapTwoColumns({
      __component: 'Component Name',
      description: 'Description',
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
      metadata: {
        background: true,
        section_id: 'id',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('Component Name');
    expect(data.section_id).toBe('id');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('Description');
  });
});
