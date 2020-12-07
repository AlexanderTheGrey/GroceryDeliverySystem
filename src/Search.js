import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import productList from './ProductList'

function Search() {
  const [{ searchTerm }, dispatch] = useStateValue();
  // getSearchReults
  let searchResults = productList.filter(pd => 
    pd.description.toLowerCase().includes(searchTerm) ||
    pd.name.toLowerCase().includes(searchTerm) ||
    pd.category.toLowerCase().includes(searchTerm))

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
