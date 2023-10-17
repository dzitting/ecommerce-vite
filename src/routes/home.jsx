import React from "react";
import "../styles/home.modules.css";
import Sale from "../components/Sale";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-overlay"></div>
      <figure className="home-banner">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg"
          alt="BANNER"
        />
      </figure>
      <div className="home-banner__content">
        <h1 className="home-banner__title">ClothWire</h1>
        <p className="home-banner__subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
          aperiam reprehenderit rerum vel inventore doloremque saepe corporis
          ducimus commodi minima eveniet adipisci sequi doloribus laudantium
          recusandae, esse ipsa, repellat odio.
        </p>
      </div>
      <Sale />
    </div>
  );
};

export default Home;
