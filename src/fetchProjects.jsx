import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const client = createClient({
    space: 'm2w9cezvelgj',
    environment: 'master',
    accessToken: 'oSeu1Powphcz39IHtpQY0caA7FWem8HkALnu41sVPyA',
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default useFetchProjects;
