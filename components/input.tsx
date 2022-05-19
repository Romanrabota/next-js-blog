import React, {useState, useEffect } from "react";
//D:\Work\nextjs-blog\pages\register.tsx

export default function Inputitem(prop) {
    
    return (                    
        <div className="flex justify-center ...   font-light">
        <input className={`block w-full  border   bg-gray-200   focus: outline-none focus:bg-white  focus:border-gray-300  text-gray-900  rounded-lg   pl-4 pr-5  py-2   ${prop.error} `}
       type="text" name={prop.name}   value={prop.value}   onChange={prop.onChange}    placeholder={prop.placeholder} />
      </div>
 
)}