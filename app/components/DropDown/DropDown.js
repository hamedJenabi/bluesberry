"use client";

import React, { useState } from "react";

import "./BeautifulDropdown.css"; // Create a CSS file for styling the dropdown

const BeautifulDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="beautiful-dropdown-container">
      <div className="beautiful-dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select an option"}
      </div>
      {isOpen && (
        <ul className="beautiful-dropdown-list">
          {options.map((option) => (
            <li
              key={option.value}
              className="beautiful-dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BeautifulDropdown;
