import Link from "next/link";
import styles from "./Header.module.css";

const Header = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};

export default Header;
