import React, { useEffect, useState } from "react";
import ProductsBanner from '../assets/images/Products_banner.jpg';
import Products_Scroll from "../components/products/Products_Scroll";

const Products = () => {
  const BASE_URL = "http://localhost:5000";
  const [products,setProducts] = useState([])
    // 🔥 Fetch from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="min-h-screen px-6 py-16 bg-[#ECE9E2] dark:bg-zinc-900">
      <div className="mt-12 w-full h-full">

      <img src={ProductsBanner} alt="Products Banner" className="w-full h-[500px] object-cover rounded-2xl"/>
      </div>
      
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 pt-8">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-7xl mx-auto">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4"
          >
            
            {/* Image */}
            <img
              src={BASE_URL + product.images}
              alt={product.name}
              className="w-full h-52 object-contain mb-4"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold mb-2">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-coral-red font-bold text-xl mb-4">
              {product.price}
            </p>

            {/* Button */}
            <button className="w-full bg-black text-white py-2 rounded-full hover:bg-zinc-700 transition">
              View Details
            </button>
          </div>
        ))}

      </div>
      <Products_Scroll/>
    
    </section>
  );
};

export default Products;