import styles from "./side-menu.module.css";

import { Logo } from "@/components/icons";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.siteTitle}>
        <div className={styles.logo}>
          <Logo />
        </div>
        Clerkie Challenge
      </div>
    </div>
  );
};

export default SideMenu;
