import Layoutreg from 'components/Layoutregister';
import Layout from 'components/Layout';
import { useRouter } from 'next/router'

import Comentitem from 'components/Coment';
import React, {useState, useEffect } from "react";
import { response } from 'express';
import ReviewService from 'server/services/ReviewService';
import {xRead} from 'src/entity';
import { HTTP_METHOD } from 'commons';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inputitem from 'components/input';
import Dialog from 'components/Modal'; 
import Modregist from 'components/Modalreg'; 


function Register(propreg) {
    const router = useRouter();  
    interface IUser {
    email: string; 
    password: string;
    confirm: string; 
    }

    
    const [inputs, setInputs] = useState<IUser>({email:'', password:'',confirm:''}); 
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log('email',name,value);
    setInputs(values => ({...values, [name]: value}))
    }
           
    const [errortext, setErortext] = useState([]);
   // const [errortext, setErortext] = useState();
   const [regtext, setRegtext] = useState([]);

   console.log('errortext',errortext); 
   console.log('regtext',regtext); 

     const handleSubmit = (event) =>



    {
     console.log('zahodithandle');
     console.log('propreg',propreg); 
     event.preventDefault();  
      //  xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>{console.log(result.response.message)});
     // xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>console.log(result.response.message));
     xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>
     {
      if(result.response.data) setRegtext(result.response);
      if(result.response.message) setErortext(result.response.message);     
     }
     );
   //  setErortext(result.response.message), (result)=>setRegtext(result.response.data));
  //  xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>setErortext(result.response.errors));
    //xRead('/auth/register',inputs, HTTP_METHOD.POST).then((result)=>setRegtext(result.response));
     console.log('errortext',errortext); 
   //  setRegtext(errortext.message);       
  }

/*var promiseB = promiseA.then(function(result) {
   // do something with result
});*/

console.log('errortext1',errortext); 

return (


   <div className="bg-cover bg-center h-168 bg-[url('https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/slideshow/AM1506.jpg?1583892706')]">       
    <div className="flex  flex-wrap font-bold  justify-center">
      <div className="mt-16  font-bold  text-2xl"> Register </div>
    </div>       
    <div className="flex  justify-center  mt-7 mb-10">
    <form onSubmit={handleSubmit}>
     <div  className="flow-root shadow-md rounded  h-120 w-160">
    <div className="flex justify-center"> 
      <div className="flex flex-col  space-y-3">

      <div className="flex space-x-2">       
          <div className="text-red-700 text-base italic font-bold">  {errortext?.hasOwnProperty('reg')?errortext['reg']:""} </div>           
</div>
 
      <div className="mb-0">
<Dialog
   
//  className={'w-222'}
//  title={t('user-check')}
//  flagId={USER_CHECK}
body={<Modregist message={regtext?.hasOwnProperty('data')?regtext['message']:""} />} /*'proba' */ // message='proba komponent'
   data={regtext?.hasOwnProperty('data')?true:null}
/>
  </div>

  

        <Inputitem  name="email"  value={inputs.email || ""}   onChange={handleChange}   placeholder="Enter your e-mail"  error= {errortext?.hasOwnProperty('email')? `border-red-500` : ''}/>
        <div className="flex space-x-2">       
          <div className="text-red-700 text-base italic font-bold">  {errortext?.hasOwnProperty('email')?errortext['email']:""} </div>
                  {/* <div className="text-red-700 text-base italic font-bold">  {if(errortext='That e-mail already taken!')?:"" </div> */}
        </div>

       <Inputitem  name="password"  value={inputs.password || ""}   onChange={handleChange}   placeholder="Enter your password"  error= {errortext?.hasOwnProperty('password')? `border-red-500` : ''}/>
        <div className=" flex justify-center   space-x-2">       
          <div className="text-red-700 text-base italic font-bold">  {errortext?.hasOwnProperty('password')?errortext['password']:""}  </div>           
        </div>

        <Inputitem  name="confirm"  value={inputs.confirm || ""}   onChange={handleChange}   placeholder="Repeat password"  error= {errortext?.hasOwnProperty('confirm')? `border-red-500` : ''}/>
        <div className="flex space-x-2">       
          <div className="text-red-700 text-base italic font-bold">  {errortext?.hasOwnProperty('confirm')?errortext['confirm']:""}  </div>           
        </div>


        <div className="flex justify-center ...   font-light">
         <div>
         <button  type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded-full  type=submit">Sign Up</button>
        </div>
        </div>   
        </div>
        </div>
        <div className="flex  justify-center space-x-2 mt-2">       
          <div className="text-white"> Have  already an account? </div> 
          <div className="text-white text-decoration-line: underline "> Login here</div>   
        </div>
        </div>
        </form>
    
    
    </div>

  
   
  
  </div>


);
}

//var useremail = document.getElementById("email");

/*Register.getInitialProps = async (ctx) => {
  console.log("???jsdghsdlgflsdhgskdjhgjsdhgjsdhgksj");
  const  {query} = ctx; 
  const json = await xRead('/auth/register',{email:useremail}, HTTP_METHOD.POST);
 // const json = await xRead('/properties/edit/'+ query.id,HTTP_METHOD.POST);
  console.log('propertydata',json);
  return { propreg: json.response};
};*/
//  /auth/register





export default Register;






