import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/Header/Header";
import BeautifulDropdown from "../components/DropDown/DropDown";

const fetchProducts = async ({ category, subCategory }) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};
const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];
export default async function Participate() {
  const products = await fetchProducts({
    category: "electronics",
    subCategory: "mobile",
  });
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Header />
        Participates
        <BeautifulDropdown
          options={options}
          onSelect={(e) => console.log(e.target.value)}
        />
      </div>
    </main>
  );
}
