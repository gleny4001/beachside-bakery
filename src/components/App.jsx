import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
