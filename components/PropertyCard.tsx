export default function Propertycard(props) {

    return (                    
            <div className=" sm:mt-0  mt-10 sm:max-w-xs  sm:w-full  sm:flex-shrink-0  sm:px-2">
            <div className="relative pb-5/6">
                <img className=" top:0px; bottom:0px; right:0px; left:0px;   rounded-lg  shadow-md  object-cover h-full w-full"  src={props.picture}  alt=""/>                 
            </div>
                <div className="relative  px-4 -mt-16 "> 
                <div className="bg-white rounded-lg  px-4  py-4  shadow-lg">       
                    <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide  text-xs  ">Plus</span>        
                        <div className="ml-2 text-xs  text-gray-600 font-semibold uppercase tracking-wide   overflow-hidden  max-h-12" >
                            {props.description} 
                            </div>        
            <h4 className="mt-1   text-gray-900 font-semibold text-lg  " > {props.propertyName} </h4>                  
                <div className="mt-1"> 
                    <span  className="text-gray-900">${props.price}</span> <span>/wk</span>
                    <span className="m1-1 text-sm text-gray-600">/wk</span>  
                        </div> 
                    < div className="mt-2  flex items-center  text-sm  text-gray-600">
                    <svg className="h-3 w-3 fill-current text-teal-500"  viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z" fill="#38B2AC"/></svg>
                    <svg className="h-3 w-3 fill-current text-teal-500"  viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z" fill="#38B2AC"/></svg>
                    <svg className="h-3 w-3 fill-current text-teal-500"  viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z" fill="#38B2AC"/></svg>
                    <svg className="h-3 w-3 fill-current text-teal-500"  viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z" fill="#38B2AC"/></svg>
                    <svg className="h-3 w-3 fill-current text-teal-500"  viewBox="0 0 24 24"   xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.283 10.93a1 1 0 0 1-1.451-1.054l.472-2.754-2-1.951a1 1 0 0 1 .553-1.706l2.766-.402L4.86.557a1 1 0 0 1 1.793 0L7.89 3.063l2.766.402a1 1 0 0 1 .554 1.706l-2.002 1.95.473 2.755A1 1 0 0 1 8.23 10.93l-2.474-1.3-2.473 1.3Z" fill="#38B2AC"/></svg>
                    <span className="ml-2"> 34 reviews </span>
                    </div>
                </div>
            </div>  
        </div>
 
)}

