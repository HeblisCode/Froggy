import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("API CALL!");
    setLoading(true);
    fetch(url, {
      headers: {
        Authorization:
          "563492ad6f91700001000001167cf63238cd4fe79fe6c132c3fbd43e",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return [data, loading];
}
