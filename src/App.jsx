import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Form, Link } from "react-router-dom";
import { categories } from "./data/categories";
import { selectCart } from "./store/Cart/cartSlice";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function App() {
  if (window.location.pathname === "/") {
    window.location.pathname = "/home";
  }
  const cart = useSelector(selectCart);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the URL with the search query parameter
    searchParams.set("q", e.target[0].value);
    setSearchParams(searchParams);
    window.location.href = `/search?q=${e.target[0].value}`;
  };
  return (
    <>
      <header className="app-header">
        <figure id="logo-container">
          <Link to={"/home"}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/897185.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5Nzc2MDAwMCwicSI6bnVsbCwiaWF0IjoxNjk3NTEwMjE2fQ__.4ab5d5809f39589b507ee167f25a96fdd426da6755f89926e9e193f347bf12d8"
              alt="LOGO"
            ></img>
          </Link>
        </figure>
        <Form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </Form>
        <div style={{ zIndex: "5" }}>
          <ul style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <li>
              <Link to="/categories">Categories</Link>
              <ul className="dropdown" style={{ height: "max-content" }}>
                {categories.map((category, index) => (
                  <li key={category + index} className="dropdown-item">
                    <Link to={`/categories/${category}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to={"/featured"}>Featured</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              {cart.items.length > 0 && (
                <p style={{ position: "absolute", top: 32, right: "32%" }}>
                  {cart.items.length}
                </p>
              )}
              <Link to={"/cart"}>
                <figure>
                  <img
                    width="20px"
                    alt="CART"
                    src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/458456.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzY3MzYwMCwicSI6bnVsbCwiaWF0IjoxNjk3NDc4Nzg4fQ__.b169674c268df8b03e231e4a922bcac8baa41430536823de069a9bfe92b9a801"
                  />
                </figure>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar__links">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
      <footer style={{ height: "30vh", padding: "2rem 0" }}>
        <div
          style={{
            height: "100%",
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <figure
            style={{
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "100%", objectFit: "contain" }}
              src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/897185.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5Nzc2MDAwMCwicSI6bnVsbCwiaWF0IjoxNjk3NTEwMjE2fQ__.4ab5d5809f39589b507ee167f25a96fdd426da6755f89926e9e193f347bf12d8"
            />
          </figure>
          <div className="footer__link">
            <h4>Support</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer__link'>
            <h4>Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className='footer__link'>
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer__link'>
            <h4>Product</h4>
            <ul>
              <li>Shipping Terms</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>© 2022 ClothWire</p>
      </footer>
    </>
  );
}

export default App;
