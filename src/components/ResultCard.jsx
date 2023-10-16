import React from "react";

const ResultCard = (props) => {
  const { result } = props;

  return (
    <div
      style={{
        height: "calc(100% / 3)",
        width: "calc(100% / 4)",
        backgroundColor: "white",
        padding: ".5rem",
        overflow: "hidden",
      }}
    >
      <figure
        style={{
          height: "300px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            cursor: "pointer",
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={result.image}
          alt="PRODUCT"
        />
      </figure>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "15%",
          flexDirection: "column",
        }}
      >
        <p>{result.name}</p>
        <p>{result.description}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          height: "15%",
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
        <p>{result.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ResultCard;
