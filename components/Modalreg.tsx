import React, {useState, useEffect } from "react";
//D:\Work\nextjs-blog\pages\register.tsx
import Link from 'next/link'

export default function Modregist(prop) {
    
    return (      
        
        //className="flex justify-center"
       <div>
       <div> {prop.message} </div>
   <div className="flex justify-center   mt-5">
       <button  type="submit"  className=" center   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded-full  type=submit">  <Link href="/login"><a>Log In</a></Link> </button>   
       </div>
       </div>

//<div className="mt-1  block px-3  py-1  rounded  font-semibold  text-white  hover:bg-gray-800 sm:mt-0   xl:text-gray-900 "  >  <Link href="/login"><a>Log In</a></Link> </div>


        /* <div className="flex justify-center ...   font-light">
        <input className={`block w-full  border   bg-gray-200   focus: outline-none focus:bg-white  focus:border-gray-300  text-gray-900  rounded-lg   pl-4 pr-5  py-2   ${prop.error} `}
       type="text" name={prop.name}   value={prop.value}   onChange={prop.onChange}    placeholder={prop.placeholder} />
      </div>*/
 
)}