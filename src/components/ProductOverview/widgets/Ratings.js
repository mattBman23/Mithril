import StarRatings from 'react-star-ratings';
import React, { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';

export const Ratings = () => {
  const { curProduct, getProductRating } = useContext(ProductContext);

  return (
    <div className="col">
      <StarRatings
        starDimension="20px"
        rating={curProduct.rating || 0}
        starSpacing="3px"
      />
      <small>
        <u>Read all reviews</u>
      </small>
    </div>
  );
};
