import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../componenst/Header";
import { ProductsGrid } from "./productsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products") 
      setProducts(response.data);
    }; 

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommer Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} /> 
      </div>
    </>
  );
}
