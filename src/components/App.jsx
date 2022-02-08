import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Product from "./product/Product";
import Footer from "./Footer";
import CartPage from "./product/CartPage";
import OrderPage from "./product/OrderPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="cartPage" element={<CartPage />}></Route>
        <Route path="/orderPage" element={<OrderPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
