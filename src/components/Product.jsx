import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { addItemToCart } from "../store/Cart/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selections, setSelections] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(products.find((product) => product.id === parseInt(id)));
    if (product) {
      setSelections(product);
    }
  }, [id]);

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    dispatch(addItemToCart({...item, selectedColor, selectedSize}));
  };

  return (
    product && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <figure
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            height: "500px",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", objectFit: "contain", height: "100%" }}
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div style={{ width: "30%" }}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {product.onSale ? (
            <p>Sale Price: {product.salePrice}</p>
          ) : (
            product.price
          )}
        </div>
        <div>
          {product.colors && (
            <select onChange={(e) => setSelectedColor(e.target.value)}>
              Colors:
              <option value='default' selected disabled>Color</option>
              {product.colors.map((color) => (
                <option key={color} value={selectedColor}>
                  {color}
                </option>
              ))}
            </select>
          )}
          {product.sizes && (
            <select onChange={(e) => setSelectedSize(e.target.value)}>
              Sizes:
              <option value='default' selected disabled>
                Size
              </option>
              {product.sizes.map((size) => (
                <option key={size} value={selectedSize}>
                  {size}
                </option>
              ))}
            </select>
          )}
          <div>
            <button onClick={(e) => handleAddToCart(e, product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Product;
