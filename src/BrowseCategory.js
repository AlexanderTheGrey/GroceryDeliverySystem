import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import productList from './ProductList';

function BrowseCategory() {
  const [{ browseCategory }, dispatch] = useStateValue();
  let categoryProducts = productList.filter(pd => 
    pd.category.includes(browseCategory))

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
              description={item.description} // It's very important to return ALL item fields (even if they're not all dispalyed).
              category={item.category}       // Otherwise, they won't be in data layer after ADD_TO_CART happens in reducer.js.
            />
          ))}
    </div>
  );
}

export default BrowseCategory;
