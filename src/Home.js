import React from "react";
import "./Home.css";
import Product from "./Product";
import productlist from './productlist'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
        />

        <div className="home_group">
        {productlist.map((pd) =>(
            <Product
              id={pd.id}
              name={pd.name}
              image={pd.image}
              price={pd.price}
              rating={pd.rating}
              description={pd.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
