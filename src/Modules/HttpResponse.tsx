import { useEffect, useState } from "react";

interface ApiResponse {
  html: string;
}

export default function HttpResponse(props: {
  url: string;
  refreshInterval: number;
  className: string;
}) {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.url);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, props.refreshInterval);
    return () => clearInterval(interval);
  }, [props.url, props.refreshInterval]);

  return (
    <div className={props.className}>
      {response ? (
        <div dangerouslySetInnerHTML={{ __html: response.html }} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
