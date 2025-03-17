import React, { useEffect, useState } from "react";
import "./index.css"
import Cards from './Cards'
import axios from "axios";


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
  <h1 className='text-center text-2xl font-sans bg-neutral-200-100 hover:bg-amber-900 duration-300 p-6'>Olx Cards </h1>
  {loading && <h1>
<div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>
</h1>
  }
  {error && <h1>Something Went Wrong...</h1>
  }
<div className="flex flex-wrap justify-center gap-4 mt-8">

  {
  products && products.map(item=> {
  return <Cards key={item.id} title={item.title} image={item.thumbnail
  } />
    })
  }

</div>

    
    </>
  )
}

export default App