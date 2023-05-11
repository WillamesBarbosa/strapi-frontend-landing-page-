import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { mapData } from '../api/map-data/map-data';
import { BaseTemplate } from '../templates/BaseTemplate/index';
import { PageNotFound } from './PageNotFound';
import { Loading } from './Loading';
import { GridTwoColumn } from '../components/GridTwoColumns/index';
import { GridContent } from '../components/GridContent/index';
import { GridImage } from '../components/GridImage/index';
import { GridText } from '../components/GridSection/index';
import { useLocation } from 'react-router-dom';

function Home() {
  const [pageData, setPageData] = useState({});
  const { menu = {}, footer_text = '', sections = [] } = pageData ? pageData : [];
  const location = useLocation();

  const isMounted = useRef(true);

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'landing-page';

    const load = async () => {
      try {
        const data = await fetch(`http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`);
        const json = await data.json();
        const { attributes } = json.data[0];
        const page = mapData([attributes]);
        const objectPage = page[0];
        setPageData(objectPage);
      } catch (error) {
        setPageData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  if (pageData === undefined) {
    return <PageNotFound />;
  }

  if (pageData && !pageData.slug) {
    return <Loading />;
  }
  return (
    <BaseTemplate
      html={footer_text}
      links={menu.links}
      logoData={{ children: menu.children, link: menu.link, srcImg: menu.srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const { componentType } = section;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={index} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={index} {...section} />;
        }
        if (component === 'section.section-grid') {
          if (componentType === 'section.section-grid-text') {
            return <GridText key={index} {...section} />;
          }
          if (componentType === 'section.section-grid-image') {
            return <GridImage key={index} {...section} />;
          }
        }
      })}
    </BaseTemplate>
  );
}

export { Home };
export default Home;
