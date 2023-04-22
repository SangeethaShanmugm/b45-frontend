import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../global";
import ProductCard from "./ProductCard";
import { Button, Container } from "reactstrap";

function ProductDisplay() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(`${API}/products`).then((res) => {
      if (res.status === 401) {
        console.log("Data Not Found");
      }
      console.log(res.data);
      setProductData(res.data);
    });
  };
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios.delete(`${API}/products/` + id).then((res) => {
      if (res.status === 200) {
        getProducts();
      }
    });
  };
  return (
    <Container>
      <h1>ProductDisplay</h1>
      <br />
      <br />
      <Button onClick={() => navigate("/products/addProducts")}>
        Create Product
      </Button>
      <br />
      <br />
      <div>
        {productData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              value={item}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default ProductDisplay;
