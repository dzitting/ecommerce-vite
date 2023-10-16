import React from 'react';
import { Outlet, useParams } from 'react-router';
import {categories} from '../data/categories';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { category } = useParams();
    if(category)
    {
        return (
            <div>
                <Outlet />
            </div>
        )
    }else {
        return (
            <div style={{gap: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', margin: '0 2.5rem'}}>
                {
                    categories.map((category, index) => (
                        <div key={category + index}>
                            <Link to={`/categories/${category}`}>{category}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Categories;