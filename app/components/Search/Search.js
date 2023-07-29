"use client";

import styles from "./Search.module.scss";
import BeautifulDropdown from "../DropDown/DropDown";
import { useState, useEffect } from "react";
import Camera from "../Camera/Camera";

const categories = [
  { label: "Category 1", value: "option1" },
  { label: "Category 2", value: "option2" },
  { label: "Category 3", value: "option3" },
  { label: "Category 4", value: "option4" },
];

const subCategories = [
  { label: "Sub Category 1", value: "option1" },
  { label: "Sub Category 2", value: "option2" },
  { label: "Sub Category 3", value: "option3" },
  { label: "Sub Category 4", value: "option4" },
];

const keys = [
  "1?",
  "id",
  "name",
  "markt",
  "5?",
  "6?",
  "7?",
  "price",
  "9?",
  "price-2",
  "einheit",
  "amount",
  "12?",
  "13?",
  "14?",
];
const itemsPerObject = 15;

function groupArrayIntoObjects(array, itemsPerObject, keys) {
  const resultArray = [];

  for (let i = 0; i < array.length; i += itemsPerObject) {
    const currentGroup = array.slice(i, i + itemsPerObject);
    const currentObject = {};

    for (let j = 0; j < keys.length; j++) {
      currentObject[keys[j]] = currentGroup[j];
    }

    resultArray.push(currentObject);
  }

  return resultArray;
}

export default function Search({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [productName, setProductName] = useState("");

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);

    const results = products.data.filter((item) =>
      item.toString().toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText.length > 2) {
      setSearchResults(results);
    }
  };
  const handleOptionSelect = (option) => {
    console.log(option);
  };

  const handleResultClick = (item) => {
    setProductName(item);
  };
  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <BeautifulDropdown options={categories} onSelect={handleOptionSelect} />
        <div className={styles.cameraWrapper}>
          <BeautifulDropdown
            options={subCategories}
            onSelect={handleOptionSelect}
          />
        </div>
        {productName && searchTerm && (
          <div className={styles.productName}>
            <p>{productName}</p>
          </div>
        )}
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          onInput={handleSearch}
        />

        <div className={styles.results}>
          {searchResults &&
            searchResults.map((item) => (
              <button
                onClick={() => handleResultClick(item)}
                className={styles.button}
                key={item}
              >
                {item}
              </button>
            ))}
        </div>

        <Camera />
      </div>
    </main>
  );
}
