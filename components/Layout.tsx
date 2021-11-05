import styles from "../styles/layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
