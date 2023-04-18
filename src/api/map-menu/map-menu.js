export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: children = '',
    logo_link: link = '',
    menu: links = [],
    logo: { url: srcImg } = '',
  } = menu;

  return {
    newTab,
    children,
    srcImg,
    link,
    links: mapLinksMenu(links),
  };
};

export const mapLinksMenu = (links = []) => {
  return links.map((link) => {
    const { open_in_new_tab: newTab = false, link_text: children = '', url: link_primary = '' } = link;

    return { newTab, children, link_primary };
  });
};
