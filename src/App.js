import React, { Suspense, useContext } from 'react';
import { Preloader, Circles } from 'react-preloader-icon';
import { Header } from './components/Header';
import { ProductOverview } from './components/ProductOverview';
import { ProductContext } from './context/ProductContext';

export const App = () => {
  const { curStyle } = useContext(ProductContext);

  return curStyle ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <br />
      <div className="container" style={{ overflow: 'hidden' }}>
        <ProductOverview />
      </div>
    </Suspense>
  ) : (
    <div
      className="bg-secondary"
      style={{ height: '100vh', width: '100vw', display: 'flex' }}
    >
      <div className="m-auto">
        <Preloader
          use={Circles}
          size={100}
          strokeWidth={21}
          strokeColor="#262626"
          duration={2000}
        />
      </div>
    </div>
  );
};
