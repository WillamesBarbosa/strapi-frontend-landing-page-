import { mapLinksMenu, mapMenu } from './map-menu';

describe('map menu', () => {
  it('should return a predefined onject if no data', () => {
    const menu = mapMenu();

    expect(menu.newTab).toBe(false);
    expect(menu.children).toBe('');
    expect(menu.link).toBe('');
    expect(menu.links).toEqual([]);
  });

  it('should menu map to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu_links: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.children).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');

    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link_primary).toBe('#pricing');
  });

  it('should return an empty array if no links ', () => {
    const links = mapLinksMenu();

    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapLinksMenu([
      {
        open_in_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link_primary).toBe('#pricing');
  });
});
