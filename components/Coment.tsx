import React, {useState, useEffect } from "react";

export default function Comentitem (prop) {
    
    return (                    
        <div className="bg-white rounded h-36 w-192"> 
        <div className="flex  space-x-2 ">
        <div className="flex flex-col space-y-2">
       <div> 
           <img className="rounded-full h-10 w-10"  src={prop.picture}   alt=""/>
         </div>
        <div> {prop.name}  </div>
        <div> {prop.lastname}  </div>

    </div>
        <div>{prop.description}</div>
        </div>
        </div>
 
)}


