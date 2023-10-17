import React from "react";
import { useParams } from "react-router";
import ResultCard from "../components/ResultCard";
import { products } from "../data/products";

const Category = () => {
  const { category } = useParams();
  const filteredProducts = products.filter((product) =>
    product.tags.includes(category)
  );
  return (
    <>
      <h1 style={{textAlign: "center"}}>{category}</h1>
      <div
        style={{
          padding: "2rem 0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p>Enjoy the selection of {category}</p>
        <div
          style={{
            width: "90%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
            margin: "0 auto",
          }}
        >
          {filteredProducts.map((product) => (
            <ResultCard key={product.id} result={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
