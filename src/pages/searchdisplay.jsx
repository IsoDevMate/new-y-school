
import React, { useState } from "react";
//import Sidebar from "./Sidebar";
//import SearchBar from "./SearchBar";

import GalleryVertical from "../card";
import { CardsData } from "./data";

function App() {
  
  
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filteredItems = CardsData.filter(
      (CardData) => CardData.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    //categories button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(CardsData, selected, query) {
    let filteredProducts = CardsData;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
          category === selected ||
          category.some((item) => item === selected)
      );
    }

    return filteredProducts.map(
      ({ title,name,price,imageurl,rating,category }) => (
       <GalleryVertical
            key={title}
            title={title}
            name={name}
            price={price}
            imageurl={imageurl}
            rating={rating}
            category={category}
            />
      )
    );
  }

    const result = filteredData(CardsData, selectedCategory, query);
  
    return (
      <>
        <Sidebar handleChange={handleChange} />
        <SearchBar query={query} handleInputChange={handleInputChange} />
    
        <GalleryVertical result={result} />
      </>
    );
  }
  
  export default App;
