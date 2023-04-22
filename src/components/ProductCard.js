import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button,
} from "reactstrap";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
function ProductCard({ value, handleDelete }) {
  const navigate = useNavigate();

  return (
    <Card
      className="card-style"
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{value.name}</CardTitle>
      </CardBody>
      <img alt="products" src={value.productImage} width="100%" />
      <CardBody>
        <CardText>{value.description}</CardText>
        <CardText>Rs. {value.price}</CardText>
        <Button color="danger" onClick={() => handleDelete(value.id)}>
          <AiFillDelete />
        </Button>
        <Button
          color="success"
          onClick={() => navigate(`/products/editProduct/${value.id}`)}
        >
          <AiOutlineEdit />
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
