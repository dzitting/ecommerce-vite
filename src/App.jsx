import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Form, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <figure>
          <img src="" alt="LOGO"></img>
        </figure>
        <Form action={"/search"} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </Form>
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
