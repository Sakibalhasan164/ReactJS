import axios from "axios"
import React, { useEffect } from 'react';

const Axios = () => {


   async function callAxios(){
       const url="http://localhost:5000/api/items"
       try {
           const request=await axios.get(url)
        //    const respose=await request.json()
           console.log(request);
       } catch (error) {
           console.log(error);
       }
   }


    return (
        <div>
        <h1>Axios Http Client</h1>
        <button onClick={callAxios}>GET</button>
        </div>
    );
}

export default Axios;
