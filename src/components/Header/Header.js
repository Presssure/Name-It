import image from "./think.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.headContainer}>
      <img
        src={image}
        className={`${styles.headImage} ${
          props.headerExpanded
            ? styles.headImageExpanded
            : styles.headImageContracted
        }`}
        alt="headerImage"
      />
      <h1
        className={`${styles.headText} ${
          props.headerExpanded
            ? styles.headTextExpanded
            : styles.headTextContracted
        }`}
      >
        {props.headTitle}
      </h1>
    </div>
  );
};

export default Header;
