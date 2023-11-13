import React from 'react';
import CategorySelectBar from '../components/categorySelectBar/CategorySelectBar';
import ProductList from '../components/product/ProductList';

const CatalogPage = () => {
    return (
        <div style={{height: 2000}}>
            <CategorySelectBar/>
            <ProductList/>
        </div>
    );
};

export default CatalogPage;