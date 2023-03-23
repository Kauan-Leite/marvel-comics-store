import React from 'react'
import '../style/SkeletonLoadingDetails.css'

function SkeletonLoadingDetails () {
  return (
    <section className="section-skeleton">
      <div className='left-skeleton'>
        <div className='img-skeleton loading'></div>
      </div>
      <div className='right-skeleton'>
        <h1 className='title-details-skeleton loading'></h1>
        <h1 className='isbn-skeleton loading'></h1>
        <h1 className='num-pages-skeleton loading'></h1>
        <h1 className='authores-skeleton loading'></h1>
        <h1 className='pcs-skeleton loading'></h1>
        <h1 className='btn-skeleton loading'></h1>
      </div>
    </section>
  )
}

export default SkeletonLoadingDetails
