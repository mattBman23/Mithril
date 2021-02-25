import React, { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const ProductSubInfo = () => {
  const { curProduct } = useContext(ProductContext);

  return (
    <div
      style={{ backgroundColor: 'pink' }}
      className="container mRowBContainer"
    >
      <div className="h4">{curProduct.slogan}</div>
      <div className="display-7">{curProduct.description}</div>
    </div>
  );
};
