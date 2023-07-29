import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.wrapper}>
    <Link href="/">Home</Link>
    <Link href="/participate">Participate</Link>
    <Link href="/sales">Sales</Link>
  </div>
);

export default Header;
