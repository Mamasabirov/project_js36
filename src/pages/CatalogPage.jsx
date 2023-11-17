import React from 'react';
import CategorySelectBar from '../components/categorySelectBar/CategorySelectBar';
import ProductList from '../components/product/ProductList';
import ConfettiButton from '../components/product/ConfettiButton';

const CatalogPage = () => {
    return (
        <div>
            <CategorySelectBar/>
            <ProductList/>
        </div>
    );
};

export default CatalogPage;