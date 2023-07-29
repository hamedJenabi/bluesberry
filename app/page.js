import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";

const fetchProducts = async ({ category, subCategory }) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products = await fetchProducts({
    category: "electronics",
    subCategory: "mobile",
  });
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Header />
      </div>
    </main>
  );
}
