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
  let firstProducts = catProducts.slice(0,4)

  return (
        <Link to="/BrowseCategory" className="ProductCategory" onClick={setCategory}>
            <p>{name}</p>
            <div className="CategoryImages">
                {firstProducts.map((prod) =>(
                    <img src={prod.image} alt="" />
                ))}
            </div>  
        </Link>
  );
}

export default ProductCategory;
