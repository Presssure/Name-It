import styles from "./SearchBox.module.css";
import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

function SearchBox({ onInputChange }) {
  const [value, setValue] = useState("test");
  console.log(value);

  function changeHandler(input) {
    setValue(input);
    onInputChange(input);
  }
  // uses memo so that we cache the method and don't need to rerender it every single time it is called
  const debounceHandler = useMemo(
    () => debounce(changeHandler, 500),
    [setValue]
  );
  return (
    <div className={styles.searchContainer}>
      <input
        // onChange={(event) => onInputChange(event.target.value)}
        onChange={(event) => debounceHandler(event.target.value)}
        placeholder="Type keywords"
        className={styles.searchInput}
        spellCheck="false"
      />
    </div>
  );
}

export default SearchBox;
