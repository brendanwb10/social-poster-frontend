import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
	const response = await axios.get(url);
	setData(response.data);
      } catch(error) {
        console.log(error);
      } finally {
	setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
