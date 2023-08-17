"use client";
// import Navigation from "./Navigation";
import Header from "./Header";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
