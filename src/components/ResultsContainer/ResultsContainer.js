import styles from "./ResultsContainer.module.css";
import Card from "../Card/Card";
function ResultsContainer({ suggested }) {
  const suggestNameJsx = suggested.map((name) => {
    return <Card key={name} suggested={name} />;
  });
  return <div className={styles.resultsContainer}>{suggestNameJsx}</div>;
}

export default ResultsContainer;
