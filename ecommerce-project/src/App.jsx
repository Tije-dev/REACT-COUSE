import axios from "axios";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";

import "./App.css";
import { TrackingPage } from "./pages/TrackingPage";
// import { useEffect } from "react";

function App() {
  // lift cart up And share it bettween pages
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  });

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
