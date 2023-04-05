import React, { useState } from "react";
import styles from "./filter.module.css";

import Checkbox from "@/components/checkbox";
import Button from "@/components/button";
import { CloseIcon } from "@/components/icons";

const Filter = ({ filterData, handleIsOpen, handleFilter }) => {
  // todo: refactor to remove business logic
  const [filters, setFilters] = useState({
    close: filterData.includes("close") ? true : false,
    best: filterData.includes("best") ? true : false
  });

  const handleClear = () => {
    document.getElementById("close").checked = false;
    document.getElementById("best").checked = false;

    setFilters({ close: false, best: false });
  };

  const handleSelect = e => {
    setFilters({ ...filters, [e.target.id]: e.target.checked });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setFilters({ close: e.target.close.checked, best: e.target.best.checked });

    const filterSubmit = [];
    if (e.target.close.checked) filterSubmit.push("close");
    if (e.target.best.checked) filterSubmit.push("best");

    handleFilter(filterSubmit);
    handleIsOpen();
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <button
          className={styles.clearButton}
          disabled={!filters.close && !filters.best}
          onClick={handleClear}
        >
          Clear all
        </button>
        <div className={styles.title}>Filter</div>
        <button className={styles.closeButton} onClick={handleIsOpen}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.filterName}>Friend Status</div>
      <form onSubmit={handleSubmit}>
        <Checkbox
          label="Close Friends"
          name="close"
          checked={filters.close}
          onClick={handleSelect}
        />
        <Checkbox
          label="Really Close Friends"
          name="best"
          checked={filters.best}
          onClick={handleSelect}
        />
        <div className={styles.submitWrapper}>
          <Button text="Apply" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Filter;
