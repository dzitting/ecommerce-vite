import React, {useEffect, useState} from "react";
import { Link, Form } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import Aside from "../components/Aside";
import {products} from "../data/products";


const Search = () => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    setResults(products?.filter((product) => product.name.toLowerCase().includes(query)));
  }, [query]);
  
  return (
    <div id="product-results"
      style={{ display: "flex", height: "100vh", flexDirection: "row-reverse" }}
    >
      <div
        style={{ width: "100%", height: "100%" }}
      >
        <p>Displaying results for '{query}'</p>
        {results && 
          results.map((result, index) => {
            return <ResultCard key={index} result={result} />
          })
        }
      </div>
      <Aside />
    </div>
  );
};

export default Search;
