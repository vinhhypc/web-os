
import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  // const [dataAll, setDataAll] =useState([])
  // const urlProduct = "https://test-one-zeta-99.vercel.app/products";
  // const urlService = "https://test-one-zeta-99.vercel.app/services";
  // let URLs = [urlProduct, urlService];
  // function getAllData(URLs) {
  //   return Promise.all(URLs.map(fetchData));
  // }
  // async function fetchData(URL) {
  //   try {
  //     const response = await axios.get(URL);
  //     return {
  //       success: true,
  //       data: response.data
  //     };
  //   } catch (error) {
  //     return { success: false };
  //   }
  // }
  // useEffect(() =>{
  //   getAllData(URLs)
  //   .then((resp) => {
  //     setDataAll(resp);  
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // },[])
  
  //   console.log(dataAll);
  return (
    <div className="App">
      <h1>Fetch api</h1>
    </div>
  );
}
