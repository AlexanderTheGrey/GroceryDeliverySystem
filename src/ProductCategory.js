import React from "react";
import "./Category.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import productlist from './productlist'

function ProductCategory({ name }) {
  const [{ browseCategory }, dispatch] = useStateValue();
  
  const setCategory = () => {
    dispatch({
      type: "BROWSE",
      browseCategory: name
    });
  };

  let catProducts = productlist.filter(pd => 
    pd.category.toLowerCase().includes(name))

  return (
    <div className="ProductCategory">
        <Link to="/BrowseCategory" onClick={setCategory}>
          <p>{name}</p>
          {catProducts.map((prod) =>(
            <img src={prod.image} alt="" className="CategoryImg"/>
          ))}
          
        </Link>
    </div>
  );
}

export default ProductCategory;
