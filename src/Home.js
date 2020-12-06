import React from "react";
import "./Home.css";
import ProductCategory from './ProductCategory'
import productcategorylist from './productcategorylist'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
        />

        <div className="home_group">
        {productcategorylist.map((cat) =>(
            <ProductCategory
              name={cat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
