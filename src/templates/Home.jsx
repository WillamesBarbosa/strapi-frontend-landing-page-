import { BaseTemplate } from '../templates/BaseTemplate/index';
import { useEffect } from 'react';
import { mapData } from '../api/map-data/map-data';
// import mockBase from '../templates/BaseTemplate/mock';
import { useRef } from 'react';
import { useState } from 'react';
import { PageNotFound } from './PageNotFound';
import { Loading } from './Loading';

function Home() {
  const [pageData, setPageData] = useState({});
  const { menu, footer_text } = pageData;
  const menuProperties = { ...menu };

  const logoData = { children: menuProperties.children, link: menuProperties.link, srcImg: menuProperties.srcImg };
  const links = menuProperties.links;
  console.log(links);

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
  return <BaseTemplate html={footer_text} links={menuProperties.links} logoData={logoData} />;
}

export { Home };
export default Home;
