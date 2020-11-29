import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
        />

        <div className="home_group">
          <Product
            id="12321341"
            title="Big Bennie's Broccoli"
            image="https://images-na.ssl-images-amazon.com/images/I/71mYzDfK-6L._SL1024_.jpg"
            price={4.99}
            rating={2.5}
          />
          <Product
            id="49538094"
            title="Fryer Whole Chicken"
            image="https://images-na.ssl-images-amazon.com/images/I/612jiEdQ58L._SL1000_.jpg"
            price={9.99}
            rating={3.5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
