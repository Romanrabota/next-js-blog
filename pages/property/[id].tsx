import Comentitem from 'components/Coment';
import { useRouter } from 'next/router'
import Layout from 'components/Layout';
import React, {useState, useEffect } from "react";
import { response } from 'express';
import ReviewService from 'server/services/ReviewService';
import {xRead} from 'src/entity';
import { HTTP_METHOD } from 'commons';
import wrapper from 'src/redux/store'
import { connect } from 'react-redux'


function Property({ prop }) {
  const router = useRouter();
  
return ( 
  /*<div>proba</div>*/
  // <div>Property: {prop}</div>

<Layout>      
<div className="container mx-auto">         
  <div className="flex flex-wrap justify-center">
    <img className="object-position: center"src={prop.picture}  width="400px"  alt=""/>        
  </div>       
   <div className="flex  justify-center  text-black  text-4xl font-black">{prop.propertyName}</div>
   <div className="text-4xl font-medium  w-80 object-position: center">{prop.price} $</div>
  <div className="flex justify-between ...">
    <div className=" rounded h-40 w-80"> {prop.description} 
    </div>
   <div className="flow-root shadow-md bg-white  rounded  h-40 w-40">
      <div className="flex justify-center ...">
        <div className="flex flex-col space-y-2...">
          <div>
            <img className="rounded-full ..."  src={prop.user.picture}   alt=""/>    
          </div>
          <div className="font-bold">
          {prop.user.firstName} {prop.user.lastName} 
          </div>
        <div className="flex justify-center ...   font-light">Manager</div>
        </div>
        </div> 
        </div>
  </div>


{prop.reviews?.map((item, index) =>

<Comentitem
lastname={prop.user.lastName} 
name={prop.user.firstName} 
picture={prop.user.picture}
description={item?.feedback}
/>
)}

</div>
 </Layout> 
);
}




/*Property.getInitialProps = async (ctx) => {
  console.log("???jsdghsdlgflsdhgskdjhgjsdhgjsdhgksj");
  const  {query} = ctx; 
  const json = await xRead('/properties/edit',{id:query.id}, HTTP_METHOD.POST);
 // const json = await xRead('/properties/edit/'+ query.id,HTTP_METHOD.POST);
  console.log('propertydata',json);
  return { prop: json.response.data};
};*/



/*Propert.getInitialProps = wrapper.getInitialPageProps(store => () => {
  console.log('2. Page.getInitialProps uses the store to dispatch things');
  store.dispatch({
    type: 'FETCH_ALL_PROPERTIES',
    //payload: 'was set in error page ' + pathname,
  });
});*/


 Property.getInitialProps = wrapper.getInitialPageProps(store => (ctx) => {
  console.log('2.dispatch id');
  const  {query} = ctx; 
  store.dispatch({
    type: 'FETCH_ID_PROPERTIES',
    //payload:{id:query.id,name:'test'},
    payload:{id:query.id},    
 });
});



const mapStateToProps = (store: any) => {
  const { properties } = store;
  console.log('prop', properties)
  return {
   prop:properties
  };
};



/*const mapDispatchToProps = (dispatch,ctx) => {
  const {id} = ctx;
  return {
      updateTask: (data, id) => dispatch(TaskActionCreators.updateTaskRequest(data, id=ctx)),
  }
}*/



const connectedPageid = connect(mapStateToProps)(Property);
console.log('connectedPageid',connectedPageid);

export default connectedPageid;


 //export default   Property;















   
 






