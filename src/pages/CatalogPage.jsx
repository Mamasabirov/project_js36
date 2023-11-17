import React, { useEffect } from 'react';
import CategorySelectBar from '../components/categorySelectBar/CategorySelectBar';
import ProductList from '../components/product/ProductList';
import ConfettiButton from '../components/product/ConfettiButton';
import Aos from 'aos';
import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
    return (
        <div>
            <CategorySelectBar/>
            <div data-aos="fade-in">
                <ProductList/>
            </div>
            
        </div>
    );
};

export default CatalogPage;