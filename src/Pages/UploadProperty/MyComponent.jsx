import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://affordabledebtconsolidation.com/wp-json');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        // Display the retrieved data in your component
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        // Display a loading message or placeholder while fetching the data
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent