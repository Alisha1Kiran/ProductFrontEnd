import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("hfg");
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading ....</p>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong !.. Please try again
      </Alert>
    );
  }

  const Cards = products.map((product) => (
    <div
      key={product.id}
      className="col-sm-2 col-md-3 text-center"
      style={{ marginBottom: "10px" }}
    >
      <Card style={{ width: "18rem", height: "21rem" }}>
        <div>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "90px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}/- </Card.Text>
          <Card.Text>
            {product.description.length > 100
              ? product.description.slice(0, 100) + "..."
              : product.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row">{Cards}</div>
    </>
  );
};

export default Products;
