import React from 'react';
import ProductForm from './ProductForm';

const AddProductPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ProductForm />
        </div>
    );
};

export default AddProductPage;