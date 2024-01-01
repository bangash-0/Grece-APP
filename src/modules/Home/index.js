import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import FeatureCard from '../../components/FeatureCard'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import Products from '../../components/ProductCard'
import Stats from '../../components/StatCard'
import Carousal from "../../components/Carousal";

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch('https://fakestoreapi.com/products?limit=8');
              const data = await response.json();

              // Filter only shirts
              const shirts = data.filter(product => product.category.toLowerCase() === "men's clothing" || product.category.toLowerCase() === "women's clothing");

              setProducts(shirts);
          } catch (error) {
              console.error('Error fetching products:', error);
          }

      };

// Call the fetchProducts function
      fetchProducts();
  }, [])

  return (
      <>
          <Hero/>

          <div className="flex flex-col text-center w-full mt-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Discover New Arrivals</h1>
              <h2 className="text-xs tracking-widest pt-2 title-font mb-1">Recently Added Shirts!</h2>
          </div>
          {
              products.length > 0 ?
                  <ProductCard products={products}/>
                  :
                  <div>Loading.....</div>
          }
          {/*<Products />*/}
          <Categories/>
          <Carousal/>

          <div className="flex flex-col text-center w-full mt-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Top Sellers</h1>
              <h2 className="text-xs tracking-widest pt-2 title-font mb-1">Browse our top-selling products</h2>
          </div>
          {
              products.length > 0 ?
                  <ProductCard products={products}/>
                  :
                  <div>Loading.....</div>
          }
          <div className="flex items-center justify-center">
              <div className="cursor-pointer bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 mb-5">
                  Shop Now
              </div>
          </div>

          <Stats/>
      </>
  )
}

export default Home