import styles from "./filterToggle.module.css";

import { ToggleIcon } from "@/components/icons";

const FilterToggle = ({
  currentFilters,
  isCleared,
  isOpen,
  handleIsCleared,
  handleIsOpen
}) => {
  const toggleButtonStatus =
    isOpen || currentFilters !== 0 ? "Highlighted" : "Base";

  return (
    <div className={styles.container}>
      <button
        className={styles["toggleButton" + toggleButtonStatus]}
        onClick={handleIsOpen}
      >
        <ToggleIcon
          fillStroke={toggleButtonStatus === "Base" ? "#424242" : "#ffffff"}
          fill={toggleButtonStatus === "Base" ? "#ffffff" : "#424242"}
        />
        {currentFilters !== 0 && (
          <div className={styles.currentFilters}>{currentFilters}</div>
        )}
      </button>{" "}
      |{" "}
      <button
        className={styles.clearButton}
        disabled={isCleared || isOpen}
        onClick={handleIsCleared}
      >
        Clear all
      </button>
    </div>
  );
};

export default FilterToggle;
