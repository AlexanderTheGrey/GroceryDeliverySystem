import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import productlist from './productlist'

function Search() {
  const [{ searchTerm }, dispatch] = useStateValue();
  // getSearchReults
  let searchResults = productlist.filter(pd => 
    pd.name.toLowerCase().includes(searchTerm) ||
    pd.description.toLowerCase().includes(searchTerm))

  return (
    <div className="search">
      

      {searchResults.map(item => (
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

export default Search;
