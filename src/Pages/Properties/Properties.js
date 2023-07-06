
// import React from 'react'
// import axios from "axios";
// import PropCard from './PropCard';
// import { Link } from 'react-router-dom';
// import { useState , useEffect } from "react";
 




// const Properties= () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8222/getAllProperty")
//       .then((response) => {
//         setProperties(response.data);
//         console.log(response.data)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
    
    
// <div>
//     {properties.map((property) => (
//       <Link to={`/DetailPage/${property._id}`}>
//         <PropCard
//         id={property._id}
//           image={property.propertyImages[0]}
//           title={property.title}
//           price={property.price}
//           timetolist={property.timetolist}
//           bedroom={property.bedroom}
//           bathroom={property.bathroom}
//           area={property.area}
//           location={property.address}
//            />
//       </Link>
//     ))}
//     </div>
//   )
// }
// export default Properties


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropCard from './PropCard';
import { Link } from 'react-router-dom';
import houseimg from '../../images/jarek-ceborski-jn7uVeCdf6U-unsplash.png';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8222/getAllProperty')
      .then((response) => {
        setProperties(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const deleteProperty = (id) => {
    axios
      .delete(`http://localhost:8222/deleteProperty/${id}`)
      .then(() => {
        setProperties(properties.filter((property) => property._id !== id));
        alert('Property deleted successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      {properties.map((property) => (
        <PropCard
          key={property._id}
          id={property._id}
          image={property.propertyImages[0]}
          title={property.title}
          price={property.price}
          timetolist={property.timetolist}
          bedroom={property.bedroom}
          bathroom={property.bathroom}
          area={property.area}
          location={property.address}
          onDelete={() => deleteProperty(property._id)}
        />
      ))}
    </div>
  );
};

export default Properties;
