import styles from "./checkbox.module.css";

const Checkbox = ({ label, name, checked, onClick }) => {
  return (
    <label className={styles.container} htmlFor={name}>
      {label}
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={checked}
        onClick={onClick}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
