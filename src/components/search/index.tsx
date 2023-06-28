import React, { useState } from "react";
import styles from "./search.module.css";
import { SearchBar } from "./search-bar";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import * as _ from "lodash";
import { SearchResult } from "./search-results";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchBarChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.search__wrapper}>
      <SearchBar
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={_.debounce(handleSearchBarChange, 500)}
      />
      <div className={styles.search__searchResultWrapper}>
        <SearchResult searchValue={searchValue} />
      </div>
    </div>
  );
}

export default Search;
