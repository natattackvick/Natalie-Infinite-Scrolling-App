import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import styles from "./menu-row.module.css";

const MenuRow = ({ activeRow, icon, rowName }) => {
  const [active, setActive] = useState("inactive");

  const pathname = useMemo(() => {
    if (rowName === "Home") {
      return "/";
    }
    return "/" + rowName.toLowerCase();
  }, [rowName]);

  useEffect(() => {
    if (activeRow === rowName.toLowerCase()) {
      setActive("active");
    } else {
      setActive("inactive");
    }
  }, [activeRow]);

  return (
    <Link href={pathname} className={styles[active + "Container"]}>
      <div className={styles.icon}>{icon}</div>
      {rowName}
    </Link>
  );
};

export default MenuRow;
