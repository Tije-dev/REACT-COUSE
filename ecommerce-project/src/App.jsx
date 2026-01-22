import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;
