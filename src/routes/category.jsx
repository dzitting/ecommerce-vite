import React from 'react';
import { useParams } from 'react-router';
import ResultCard from '../components/ResultCard';
import { products } from '../data/products';


const Category = () => {
    const { category } = useParams();
    const filteredProducts = products.filter(product => product.tags.includes(category));
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>{category}</h1>
            <p>Enjoy the selection of {category}</p>
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem'}}>
                {
                    filteredProducts.map(product => (
                        <ResultCard key={product.id} result={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default Category;