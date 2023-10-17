import React, {useEffect, useState} from "react";
import { Link, Form } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import Aside from "../components/Aside";
import {products} from "../data/products";


const Search = () => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get("q").toLowerCase();

  useEffect(() => {
    setResults(products?.filter((product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query) || product.tags.map(tag => tag.toLowerCase()).includes(query)));
  }, [query]);
  
  return (
    <div id="product-results"
      style={{ padding:'2rem 0', display: "flex", height: "100%", flexDirection: "row-reverse", minHeight: '80vh' }}
    >
      <p style={{position: 'absolute', top: '5rem', left: '15rem', fontSize: '1.5rem'}}>Displaying results for '{query}'</p>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'row', gap: '1rem', margin: '0 auto'}}>
        <Aside />
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', margin: '0 auto'}}>
          {
            results.map(product => (
              <ResultCard key={product.id} result={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Search;
