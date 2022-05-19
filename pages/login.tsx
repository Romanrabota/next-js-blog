import Layoutreg from 'components/Layoutregister';
import Layout from 'components/Layout';
import { useRouter } from 'next/router'

import Comentitem from 'components/Coment';
import React, {useState, useEffect } from "react";
import { response } from 'express';
import ReviewService from 'server/services/ReviewService';
import {xRead} from 'src/entity';
import { HTTP_METHOD } from 'commons';


function Login({ prop }) {
    const router = useRouter();

    interface IUser {
      email: string; 
      password: string;  
      token: string;     
      }

      const [inputs, setInputs] = useState<IUser>({email:'', password:''}); 
      const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log('email',name,value);
      setInputs(values => ({...values, [name]: value}))
      }
  
      const [errortext, setErortext] = useState([]);
     // const [errortext, setErortext] = useState();
     const [logtext, setLogtext] = useState([]);
  
       const handleSubmit = (event) =>
      {
      
       event.preventDefault();  
        //  xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>{console.log(result.response.message)});
       // xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>console.log(result.response.message));
       xRead('/auth/login',inputs, HTTP_METHOD.POST).then((result)=>
    {   
      if(result.response.data) setLogtext(result.response);
      if(result.response.message) setErortext(result.response.message); 
    }
       )
       console.log('errortext',errortext); 
           
      }

return (
  
<div className="bg-cover bg-center h-164 bg-[url('https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/slideshow/AM1506.jpg?1583892706')]">       
    <div className="flex  flex-wrap font-bold  justify-center">
      <div className="mt-20  font-bold  text-2xl"> Welcome </div>
    </div>       
  <div className="flex  justify-center  mt-10 mb-10">
  <form onSubmit={handleSubmit}>
    <div className="flow-root shadow-md rounded  h-120 w-160">
      <div className="flex justify-center">    
        <div className="flex flex-col  space-y-4">
    
        <div className="flex justify-center  font-light">
        <input className={`block w-full ${errortext.hasOwnProperty('email')? `border-red-500` : ''}  border   bg-gray-200   focus: outline-none focus:bg-white  focus:border-gray-300)  text-gray-900  rounded-lg   pl-4 pr-5  py-2`}
      type="text" name="email"   value={inputs.email || ""}    onChange={handleChange}    placeholder="Enter your e-mail" />
        </div>
        <div className="flex space-x-2">       
          <div className="text-red-700 text-base italic font-bold">  {errortext?.hasOwnProperty('email')?errortext['email']:""} </div>           
        </div> 
             
        <div className="flex justify-center   font-light">
        <input className={`block w-full   ${errortext.hasOwnProperty('password')? `border-red-500` : ''}     border   bg-gray-200   focus: outline-none focus:bg-white  focus:border-gray-300  text-gray-900  rounded-lg   pl-4 pr-5  py-2`}
          type="text"     name="password"   value={inputs.password || ""}    onChange={handleChange}      placeholder="Enter your password"/>
        </div>
        <div className="flex space-x-2">       
          <div className="text-red-700 text-base italic font-bold">  {errortext?.hasOwnProperty('password')?errortext['password']:""}  </div>           
        </div>
        
        <div className="flex justify-center ...   font-light">
          <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded-full">Login</button>
          </div>
        </div>   

        
        
        </div>
        </div>
        </div>
        </form>
    
    </div>

  
   
  
  </div>










 
);
} 






export default Login;
