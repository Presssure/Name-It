import styles from "./SearchBox.module.css";

function SearchBox({ onInputChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Type keywords"
        className={styles.searchInput}
        spellCheck="false"
      />
    </div>
  );
}

export default SearchBox;
