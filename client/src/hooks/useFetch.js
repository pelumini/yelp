import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch(url);
    console.log(response);
    const data = await response.data.data.restaurants;
    //const [item] = data.results;
    //setData(item);
  }, []);

  return { data };
};

export default useFetch;
