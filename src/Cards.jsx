import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = (prop) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products)
    });
  }, []);

  
  return <>

{ 
products.map(item => {
return <div className="max-w-2xs bg-white shadow-lg rounded overflow-hidden border border-gray-300">
     <img
       className="w-full h-42 object-cover"
       src="https://images.macrumors.com/t/t0HGgkcxSch3BjyR0h1ouAm-pTM=/1600x0/article-new/2024/09/iphone-16-design.jpg" 
       alt="iPhone 13 Pro Max"
     />

     <div className="p-4">
       <h2 className="text-lg font-semibold text-gray-800">Rs 216,000</h2>
       <p className="text-sm text-gray-600">
         {/* iPhone 13 Pro Max | PTA | 128/256 GB | STOCK */}
         {prop.title = item.title}
       </p>
       <p className="text-xs text-gray-500 mt-1">Gulberg, Lahore</p>
       <p className="text-xs text-gray-400 mt-1">1 week ago</p>
     </div>
   </div>


})





}




  
  
  </>;
};

export default Cards;
