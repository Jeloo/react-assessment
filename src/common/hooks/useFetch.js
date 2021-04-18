import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState();
  const [pending, setPending] = useState(false);
  const [error, setDataError] = useState('');

  const fetchData = (fetchInput) => {
    setPending(true);

    return fetch(fetchInput)
      .then(async (response) => {
        setData(await response.json());
      })
      .catch((e) => {
        setDataError(e);
      })
      .finally(() => {
        setPending(false);
      });
  };

  return {
    fetchData,
    data,
    pending,
    error,
  };
};

export default useFetch;
