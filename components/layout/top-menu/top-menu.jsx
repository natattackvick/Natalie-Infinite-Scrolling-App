import { useRouter } from "next/router";
import styles from "./top-menu.module.css";

const TopMenu = () => {
  const router = useRouter();
  const pathname = router.pathname.replace("/", "") || "home";
  const pageTitle = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  return (
    <div className={styles.container}>
      <p>{pageTitle}</p>
    </div>
  );
};

export default TopMenu;
