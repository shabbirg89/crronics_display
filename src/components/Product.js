import React from 'react';

const Product = ({ name, description, image }) => {
  return (
    <div className="product">
      <img src={process.env.PUBLIC_URL + `/assets/images/${image}`} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Product;