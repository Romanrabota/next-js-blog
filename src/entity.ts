import { HTTP_METHOD } from 'commons';
import getConfig from 'next/config';

const { publicRuntimeConfig : { BASE_URL, PORT } } = getConfig();

/*function xFetch( url, data, method) {
    header .....
    return fetch(url, data).jsio().catch(e => errorr);
 }*/

 
 /*xRead(url, data, method = HTTP_METHOD.GET) {
    xFetch(url, data, method)
 }*/




export  function xRead(url, data:any = {}, method = HTTP_METHOD.GET) {
   return  xFetch(url,method, data )
    
 }



 /*export xSave(url, data) {
    xFetch(url, data, 'POST')
  }*/



 function xFetch(endpoint: string,  method: HTTP_METHOD, data = {}, token?: string) {

    let fullUrl = BASE_URL + (PORT ? ':' + PORT : '') + '/api' + endpoint;
    // console.log('fullUrl',fullUrl);
    const params: any = {
        method,
        credentials:'include',
        headers: token ? {
            Authorization: 'bearer ' + token, // get token from cookies
        } : {},
    };

    if (method !== HTTP_METHOD.GET) {
        params['headers']['content-type'] = 'application/json';
        params['body'] = JSON.stringify(data);

    } else {
        const opts = Object.entries(data).map(([key, val]) => key + '=' + val).join('&');
        fullUrl += (opts.length > 0?'?' + opts:'');
    }
  

     console.log('url=', fullUrl, 'method=', method, 'data=', data);
    return fetch(fullUrl, params)
        .then((response) => {
            return response.json().then((json) => ({ json, response }));
        }) 
        .then(({ json, response }) =>
            Promise.resolve({
                success: response.ok ? true : false,
                response: json
                
            }) 
        );
    
         
}





 /*export public xRead = (uri: string, data: any = {}, method: HTTP_METHOD = HTTP_METHOD.GET) => {
    return xFetch(uri, method, data);
}*/
