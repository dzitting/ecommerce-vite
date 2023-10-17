import React from "react";
import { Outlet, useParams } from "react-router";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  if (category) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "white" }}>Categories</h1>
        <div
          style={{
            gap: "1rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
            margin: "0 auto",
            padding: '5rem 0',
            textAlign: 'center'
          }}
        >
          {categories.map((category, index) => (
            <div key={category + index}>
              <Link to={`/categories/${category}`}>{category}</Link>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Categories;
