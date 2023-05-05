import { BaseTemplate } from '../templates/BaseTemplate/index';
import { useEffect } from 'react';
import { mapData } from '../api/map-data/map-data';
import mockBase from '../templates/BaseTemplate/mock';
import { useRef } from 'react';
import { useState } from 'react';
import { PageNotFound } from './PageNotFound';

function Home() {
  const [pageData, setPageData] = useState({});
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
    return <h1>Carregando...</h1>;
  }
  return <BaseTemplate {...mockBase} />;
}

export { Home };
export default Home;
