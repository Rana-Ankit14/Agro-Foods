import React from "react";
import SearchField from "react-search-field";
import { useHistory } from "react-router-dom";
export const SearchBar = () => {
  const history = useHistory();
  return (
    <SearchField
      placeholder="Search Products ..."
      onSearchClick={(value) => {
        history.push(`/products/${value}`);
      }}
      onEnter={(value, e) => {
        e.preventDefault();
        history.push(`/products/${value}`);
      }}
      classNames="searchBar"
    />
  );
};
