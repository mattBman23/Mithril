import { ProductContext } from '../../../context/ProductContext';
import React, { useContext } from 'react';
import { StyleSelector } from '../widgets/StyleSelector';
import { GetSizeQty } from '../widgets/GetSizeQty';
import { Ratings } from '../widgets/Ratings';

export const ProductMainInfos = () => {
  const { curProduct, curStyle } = useContext(ProductContext);
  const curSizes = [];
  const curQty = [];

  for (let i in curStyle.skus) {
    curSizes.push(curStyle.skus[i].size);
    curQty.push(curStyle.skus[i].quantity);
  }

  return (
    <>
      <Ratings />
      <div className="fs-4 text-muted">{curProduct.category}</div>
      <div data-testid="prodName" className="prodName fs-1 fw-bold">
        {curProduct.name}
      </div>
      {curStyle.sale_price ? (
        <div className="col fs-5 d-flex fw-bold">
          <p style={{ color: 'red' }}>${curStyle.sale_price}</p>
          <u style={{ marginLeft: '10px', textDecoration: 'line-through' }}>
            ${curStyle.original_price}
          </u>
        </div>
      ) : (
        <div className="fs-5 fw-bold d-flex">
          <p>${curStyle.original_price}</p>
        </div>
      )}

      <div className="row">
        <div className="col">
          <div className="btn btn-outline-secondary">
            <i className="fab fa-facebook"></i> Facebook
          </div>
          <div className="btn btn-outline-secondary mx-3">
            <i className="fab fa-twitter"></i> Twitter
          </div>
          <div className="btn btn-outline-secondary">
            <i className="fab fa-pinterest"></i> Pinterest
          </div>
        </div>
      </div>

      <StyleSelector />
      <GetSizeQty />
    </>
  );
};
