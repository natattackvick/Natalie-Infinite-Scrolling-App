import styles from "./button.module.css";

const Button = ({ handleClick, text, type }) => {
  return (
    <button
      className={styles.container}
      onClick={handleClick || null}
      type={type || "button"}
    >
      {text}
    </button>
  );
};

export default Button;
