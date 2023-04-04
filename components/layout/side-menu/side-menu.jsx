import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./side-menu.module.css";

import { Logo, HomeIcon, FriendsIcon } from "@/components/icons";
import MenuRow from "./menu-row";

const SideMenu = () => {
  const router = useRouter();
  const pathname = router.pathname.replace("/", "");
  const [activeRow, setActiveRow] = useState(pathname || "home");
  const renderIcon = IconComponent => IconComponent && <IconComponent />;

  useEffect(() => {
    if (activeRow !== pathname) {
      setActiveRow(pathname || "home");
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.siteTitle}>
        <div className={styles.logo}>
          <Logo />
        </div>
        Clerkie Challenge
      </div>
      <div className={styles.menuContainer}>
        <MenuRow
          activeRow={activeRow}
          icon={renderIcon(HomeIcon)}
          rowName="Home"
        ></MenuRow>
        <MenuRow
          activeRow={activeRow}
          icon={renderIcon(FriendsIcon)}
          rowName="Friends"
        ></MenuRow>
      </div>
    </div>
  );
};

export default SideMenu;
