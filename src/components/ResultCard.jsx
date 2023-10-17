import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/Cart/cartSlice";
import "../styles/resultcard.modules.css";

const ResultCard = ({ result }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="result-card">
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <figure
          className="result-card__image"
          onClick={() => navigate("/products/" + result.id)}
        >
          <img
            style={{
              cursor: "pointer",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            src={result.image}
            alt="PRODUCT"
          />
        </figure>
        <div
          onClick={() => navigate("/products/" + result.id)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20%",
            flexDirection: "column",
          }}
        >
          <p>
            <strong>{result.name}</strong>
          </p>
          <p>{result.description}</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            height: "10%",
            alignItems: "center",
          }}
        >
          <figure>
            <img
              style={{ cursor: "pointer" }}
              src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/14712.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzY3MzYwMCwicSI6bnVsbCwiaWF0IjoxNjk3NDczMjgwfQ__.1f00925635a6725c2e85c682639f81956ebdeeda1d2bb949332e62cfd8d22ead"
              alt="WISHLIST"
            />
          </figure>
          {result.onSale ? (
            <div>
              <p>SALE {result.salePrice}</p>
              <p>
                <strike>{result.price}</strike>
              </p>
            </div>
          ) : (
            <p>{result.price}</p>
          )}

          <button onClick={() => dispatch(addItemToCart(result))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
