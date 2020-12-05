import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function HeaderSearch() {
  const [{ searchTerm }, dispatch] = useStateValue();

  const updateSearchTerm = event => {
      dispatch({
        type: "SEARCH",
        searchTerm: event.target.value
      });
    };

  return (
    <div className="header_search">
        <input className="header_searchInput" type="text" 
          placeholder = "Search"
          value = {searchTerm}
          onChange={updateSearchTerm}/>
        <Link to="/Search" className="header_searchIcon">
          <SearchIcon />
        </Link>
      </div>
  );
}

export default HeaderSearch;
