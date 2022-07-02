import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorite from "./components/Favorite";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "aqua"}}>
          
          <h1 style={{ marginLeft: "80px", marginBottom: "10px"}}>FoodList 
          <span className="material-symbols-outlined">menu</span> 
          <span className="material-symbols-outlined">search</span>
         
          </h1>
        
         

        <Navbar />
      </div>

      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/product/:ProductId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
