import styles from "./Card.module.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
function Card({ suggested }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={styles.cardLink}
      href={`${nameCheapUrl}${suggested}`}
    >
      <div className={styles.resultNameCard}>
        <p className={styles.resultName}>{suggested}</p>
      </div>
    </a>
  );
}

export default Card;
