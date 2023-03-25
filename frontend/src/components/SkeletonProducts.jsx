import React from 'react';
import '../style/components/SkeletonProducts.css';

function SkeletonProducts () {
  return (
    <div className="product-card">
      <div className='thumb-skeleton loading' />
      <h1 className='title-skeleton loading' />
      <div className='price-details-skeleton'>
        <h1 className='price-skeleton loading'></h1>
      </div>
    </div>
  );
}

export default SkeletonProducts;
