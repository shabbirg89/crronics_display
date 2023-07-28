import React from 'react';
import Product from './Product';
import productData from '../productData';

const ProductList = () => {
  return (
    <section id="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {productData.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;