import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
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
        <SearchIcon className="header_searchIcon" />
      </div>
  );
}

export default HeaderSearch;
