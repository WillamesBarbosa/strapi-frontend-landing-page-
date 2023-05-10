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

function Home() {
  const [pageData, setPageData] = useState({});
  const { menu, footer_text, sections } = pageData;
  const menuProperties = { ...menu };

  const logoData = { children: menuProperties.children, link: menuProperties.link, srcImg: menuProperties.srcImg };

  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/api/pages?populate=deep');
        const json = await data.json();
        const { attributes } = json.data[0];
        const page = mapData([attributes]);
        const objectPage = page[0];
        setPageData(objectPage);
        console.log(objectPage);
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
  }, []);

  if (pageData === undefined) {
    return <PageNotFound />;
  }

  if (pageData && !pageData.slug) {
    return <Loading />;
  }
  return (
    <BaseTemplate html={footer_text} links={menuProperties.links} logoData={logoData}>
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
        console.log(section);
        // console.log(component);
      })}
    </BaseTemplate>
  );
}

export { Home };
export default Home;
