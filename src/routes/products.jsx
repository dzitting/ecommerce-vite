import React from "react";
import { products } from "../data/products";
import ResultCard from "../components/ResultCard";
import { Outlet, useParams } from "react-router-dom";

const Products = () => {
    const { id } = useParams();
    if(id)
    {
        return (
            <Outlet />
        )
    } else {
        return (
          <div>
            <h1>Products</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
              {products.map((product) => (
                <ResultCard key={product.id} result={product} />
              ))}
            </div>
          </div>
        );
    }
};

export default Products;
