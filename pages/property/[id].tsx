// import Propertycard from 'components/PropertyCard'
import { useRouter } from 'next/router'
import Layout from 'components/Layout';
import React, {useState, useEffect } from "react";
import { response } from 'express';


function Property(props) {
  const router = useRouter();
  console.log('property ID  1111111 = ', router.query.id);
  const  id = router.query.id;
  const options ={ method:'POST', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify({})};

  const [property,setProperty] = useState(null);
  
  useEffect(() => {

      const loadProperty = async()=>{

         const response = await fetch('http://localhost:3000/api/properties/edit/'+id,options) 
          
      //  const response = await fetch('http://localhost:3000/api/properties/edit/'+id) 


          console.log('zahodit');

          const json = await response.json(); 
          
          console.log('jhjhjh', json);
        
          setProperty(json);
      }
      
      loadProperty();
  });

  console.log('property-2', property);
  
 return (

  <Layout>      
      <h1>lalala</h1>
      { router.query.id}
   
        <div>

        <img className=" top:0px; bottom:0px; right:0px; left:px;   rounded-lg  shadow-md  object-center "  src="https://i2.au.reastatic.net/1000x750-format=webp/30b6a81efb47855ca9c41925043c1a53c7e8eb7a8280c1ca52a25b6fde6e6938/main.jpg"  width="500" height="600"  alt=""/> 


        </div>

       
     








  </Layout>

);

};

export default Property
