import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button, Col } from "reactstrap";
import { API } from "../global";
function AddProduct({ productData, setProductData }) {
  const [name, setName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newProducts = {
      name: name,
      productImage: productImage,
      description: description,
      price: price,
    };
    fetch(`${API}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProducts),
    })
      .then((data) => data.json())
      .then((res) => {
        setProductData(res);
        console.log(res);
      })
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h1>AddProduct</h1>
      <Button onClick={() => navigate(-1)}>BACK</Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Product Name
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              name="name"
              placeholder="Enter Product Name"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="productImage" sm={2}>
            Product Image
          </Label>
          <Col sm={10}>
            <Input
              id="productImage"
              name="productImage"
              placeholder="Enter Product Image"
              type="text"
              onChange={(event) => setProductImage(event.target.value)}
              value={productImage}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Product Description
          </Label>
          <Col sm={10}>
            <Input
              id="description"
              name="description"
              placeholder="Enter Product Description"
              type="text"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>
            Product Price
          </Label>
          <Col sm={10}>
            <Input
              id="price"
              name="price"
              placeholder="Enter Product Price"
              type="text"
              onChange={(event) => setPrice(event.target.value)}
              value={price}
            />
          </Col>
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default AddProduct;
