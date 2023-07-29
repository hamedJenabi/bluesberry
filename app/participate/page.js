import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/Header/Header";

import Search from "../components/Search/Search";

const fetchProducts = async ({ category, subCategory }) => {
  const res = await fetch(
    "https://heisse-preise.io/data/latest-canonical.billa.compressed.json"
  );
  const data = await res.json();
  return data;
};
const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Participate() {
  const products = await fetchProducts({ category: "electronics" });

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Header />
        <Search products={products} />
      </div>
    </main>
  );
}
