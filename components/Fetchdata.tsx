import React from "react";
import Propertycard from 'components/PropertyCard';


export default class Fetchdata extends React.Component {
   state = {
       property: null
   };

 async componentDidMount() {
     const url ="http://localhost:3000/api/properties/all";
     const response = await fetch(url);
     const data = await response.json();
     this.setState({property:data.properties})
     console.log(data.properties); 
    } 

render(){

  return(
<div>
 <Propertycard 
 PropertyName={this.state.property?.propertyName}
 /> 
 </div>


  )






}





}
