// ProductPage.js

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Loader from "./Loader";
async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const ProductPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0 , max: 0 });
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchMobiles = async () => {
      const info = await fetchData();
      setData(info || { products: [] }); // Assuming the response object has a 'products' property
      setLoading(false);
    };

    fetchMobiles();
  }, []);

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    setPriceRange({ ...priceRange, [name]: parseFloat(value) });
  };
  console.log(data.products);
  useEffect(() => {
    if (data && data.products) {
      const filtered = data.products.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) && (
          item.price >= priceRange.min &&
          item.price <= priceRange.max)
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, priceRange, data]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="p-4">
      <h2 className=" text-center text-2xl font-bold mb-4">Product Page</h2>
      <div className="flex flex-wrap gap-4 justify-between w-auto  rounded-lg p-2">
        <div className="flex bg-white">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline border-slate-800 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">
            Search
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange.min}
          name="min"
          onChange={handlePriceChange}
            className=" w-auto outline px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <span>Min Price:- {priceRange.min}</span>
          <input
          
          type="range"
          min="0"
          max="10000"
          step="100"
          value={priceRange.max}
          name="max"
          onChange={handlePriceChange}
            className="w-auto outline px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <span>Max Price:- {priceRange.max}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 p-10">
        {filteredData.length > 0
          ? filteredData.map((item, index) => (
              <ProductCard
                key={index}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                price={item.price}
                addToCart={() => addToCart(item)}
              />
            ))
          : data.products &&
            data.products.map((item, index) => (
              <ProductCard
                key={index}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                price={item.price}
                addToCart={() => addToCart(item)}
              />
            ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
};

export default ProductPage;
