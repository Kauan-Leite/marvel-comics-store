import React from 'react'
import '../style/SkeletonLoading.css'

function SkeletonLoading () {
  return (
    <div className="product-card">
      <div className='thumb-skeleton loading' />
      <h1 className='title-skeleton loading' />
      <div className='price-details-skeleton'>
        <h1 className='price-skeleton loading'></h1>
        <div className='add-to-cart-skeleton loading'></div>
      </div>
    </div>
  )
}

export default SkeletonLoading
