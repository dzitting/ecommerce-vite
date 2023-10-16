import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Form, Link } from "react-router-dom";
import { categories } from "./data/categories";

function App() {
  if(
    window.location.pathname === '/'
  )
  {
    window.location.pathname = '/home'
  }
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          padding: '2.5rem 0',
          zIndex: '5',
        }}
      >
        <figure>
          <Link to={"/home"}>
          <img src="" alt="LOGO"></img>
            </Link>
        </figure>
        <Form action={"/search"} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </Form>
        <div style={{zIndex: '5'}}>
          <ul style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <li>
              <Link to='/categories'>Categories</Link>
              <ul className="dropdown" style={{height: 'max-content'}}>
                {
                  categories.map((category, index) => (
                    <li key={category + index} className="dropdown-item">
                      <Link to={`/categories/${category}`}>{category}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li>
              <Link to={"/featured"}>Featured</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default App;
