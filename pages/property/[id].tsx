// import Propertycard from 'components/PropertyCard'
import { useRouter } from 'next/router'
import Layout from 'components/Layout';
import React, {useState, useEffect } from "react";
import { response } from 'express';


function Property(props) {
  const router = useRouter();
  console.log('property ID  1111111 = ', router.query.id);
  const  id = router.query.id;
  const options ={ method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({})};
  const [property,setProperty] = useState(null);

  
    useEffect =>(() => {
      const loadProperty = async()=>{

      const response = await fetch('http://localhost:3000/api/properties/'+id,options) 
      const json = await response.json(); 
      setProperty(json);
      }

  });

 return (

  <Layout>      
      <h1>lalala</h1>
      { router.query.id}
    <ul> 
     {property.map((proper) => {
     return <li key={proper.propertyId}></li>    
     console.log(proper.propertyName);    
     })} 
    </ul>
     




  </Layout>
);
};

export default Property
