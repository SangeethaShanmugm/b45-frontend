import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
function App() {
  const [productData, setProductData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDisplay />} />
          <Route
            path="/products/addProducts"
            element={
              <AddProduct
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route path="/products/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
