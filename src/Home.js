import React from "react";
import "./Home.css";
import ProductCategory from './ProductCategory'
import ProductCategoryList from './ProductCategoryList'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
        />

        <div className="home_group">
        {ProductCategoryList.map((cat) =>(
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
