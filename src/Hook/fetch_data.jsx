import { useEffect, useState } from "react";

export const useFetchData = (initialQuery) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/", {
          // Reemplaza con la URL correcta de tu servidor Flask
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }), // Envía la consulta como un objeto JSON
        });
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { data, loading, error, setQuery };
};
