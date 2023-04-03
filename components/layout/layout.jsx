import styles from "./layout.module.css";
import SideMenu from "./side-menu";
import TopMenu from "./top-menu";

const Layout = ({ children }) => {
  return (
    <div>
      <SideMenu />
      <TopMenu />
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
