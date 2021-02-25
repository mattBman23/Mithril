import React, { useContext, useState } from 'react';
import { ImageGallery } from './layouts/ImageGallery';
import { ProductContext } from '../../context/ProductContext';
import { ProductMainInfos } from './layouts/ProductMainInfos';

export const ProductOverview = () => {
  const { curProduct, zoomIn } = useContext(ProductContext);
  const [curWidth, setCurWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setCurWidth(window.innerWidth);
  });

  return (
    <div className="d-block">
      <div className="row">
        <div className={'d-flex col-7'}>
          <ImageGallery />
        </div>
        <div
          className={`col-5 align-content-centerrow flex-wrap ${
            curWidth > 1400 ? 'd-flex' : 'd-none'
          }  `}
        >
          <ProductMainInfos />
        </div>
      </div>
      <br />
      <div className="row container">
        <div className="col-7">
          <div className="fs-3">{curProduct.slogan}</div>
          <div className="fs-6">{curProduct.description}</div>
        </div>
        <div className="col-5">
          {curProduct.features.map((feature, i) => {
            return feature.value ? (
              <div key={feature.feature} className="fs-4">
                {feature.feature}: {feature.value}
              </div>
            ) : (
              <div key={i}></div>
            );
          })}
        </div>
      </div>
      <br />
    </div>
  );
};
