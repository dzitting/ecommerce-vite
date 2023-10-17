import React from "react";
import { products } from "../data/products.json";
import ResultCard from "../components/ResultCard";

const Sale = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "white" }}>Sale</h2>
      <div style={{ padding: "2rem 0" }}>
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
          {products.map((product) => {
            if (product.onSale) {
              return <ResultCard key={product.id} result={product} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Sale;
