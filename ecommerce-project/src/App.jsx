import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/CheckoutPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
