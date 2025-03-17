import React, { useEffect, useState } from "react";
import "./index.css"
import Cards from './Cards'
import axios from "axios";
import Navbar from "./components/Navbar";


const App = () => {
  const [products, setProducts] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(false);

  useEffect(() => {
    axios('https://dummyjson.com/products').then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products)
    }) .catch((err)=>{
      console.log(err , "something went wrong");
setError(true)
      
    }) .finally(()=>{
      console.log("data is here");
      setLoading(false)
    });
  }, []);
  return (
    <>
  <Navbar/>
  {loading && <div className="flex items-center justify-center h-100">
    <div className="loader ">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
</div>
  </div>


  }
  {error && <h1>Something Went Wrong...</h1>
  }
<div className="flex flex-wrap justify-center gap-4 mt-8">

  {
  products && products.map(item=> {
  return <Cards key={item.id} title={item.title} stock={item.
    availabilityStatus} image={item.thumbnail
  } />
    })

      
      
  }

</div>

    
    </>
  )
}

export default App