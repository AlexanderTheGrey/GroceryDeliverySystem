import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import productlist from './productlist'

function BrowseCategory() {
  const [{ browseCategory }, dispatch] = useStateValue();
  // getSearchReults
  let categoryProducts = productlist.filter(pd => 
    pd.category.toLowerCase().includes(browseCategory))

  return (
    <div className="search">
      

      {categoryProducts.map(item => (
            <Product
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}
    </div>
  );
}

export default BrowseCategory;
