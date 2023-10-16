import React from "react";
import { Link, Form } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import Aside from "../components/Aside";

const Search = () => {
  const [results, setResults] = useState([]);
  
  return (
    <div id="product-results"
      style={{ display: "flex", height: "100vh", flexDirection: "row-reverse" }}
    >
      <div
        style={{ width: "100%", height: "100%" }}
      >
        {
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
