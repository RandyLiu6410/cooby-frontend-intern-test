import { memo } from "react";
import styles from "./search-bar.module.css";
import { TextFieldProps, TextField } from "@mui/material";

type SearchBarProps = TextFieldProps;

export const SearchBar = memo<SearchBarProps>((props) => {
  return <TextField className={styles.search__searchBar} {...props} />;
});
