import React, { useState } from 'react'
import { products } from "../../constants/index.js";

const ProductsScroll = () => {
    const extendedProducts = [...products, ...products];
  return (
<div className="mt-12">

  <div className="flex items-center gap-6 animate-scroll animate-scroll:hover">
    {extendedProducts.map((item, i) => (
      <div key={i} className="min-w-[200px] bg-white p-4 rounded-xl">
        <img src={item.imgURL} className="h-full mx-auto" />
        <p className="mt-2">{item.name}</p>
      </div>
    ))}
  </div>
</div>
)
}

export default ProductsScroll;