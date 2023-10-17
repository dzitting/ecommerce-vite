import React from "react";
import { products } from "../data/products";
import ResultCard from "../components/ResultCard";
import { Outlet, useParams } from "react-router-dom";
import '../styles/products.modules.css';

const Products = () => {
  const { id } = useParams();
  if (id) {
    return <Outlet />;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "white" }}>Products</h1>
        <div className="products"
        >
          {products.map((product) => (
            <ResultCard key={product.id} result={product} />
          ))}
        </div>
        {window.scrollY > 200 && (
          <div
          className='to-top'
            onClick={() => window.scrollTo(0, 0)}
          >
            <p>To Top</p>
          </div>
        )}
      </div>
    );
  }
};

export default Products;
