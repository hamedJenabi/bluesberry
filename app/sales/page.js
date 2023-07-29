import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Header />
      </div>
    </main>
  );
}
