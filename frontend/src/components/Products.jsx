import React from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage } from '../redux/actions';
import SkeletonProducts from './SkeletonProducts';
import ProductCard from './ProductCard';
import LeftArrow from '../images/arrow-left.svg';
import RightArrow from '../images/arrow-right.svg';
import PropTypes from 'prop-types';
import '../style/components/Products.css';

function Products (props) {
  const { dispatch, comicsReducer } = props;
  const { products, isFetching, offset, page } = comicsReducer;

  return (
    <section className='products-page'>
      <section className='all-products'>
        { isFetching
          ? Array.from({ length: 20 }).map((_, index) => (
            <SkeletonProducts key={index} />
          ))
          : products.map((product) => {
            const { id, title, prices, thumbnail } = product
            return (
              <ProductCard
                key={ id }
                id={ id }
                title={ title }
                prices={ prices }
                thumbnail={ thumbnail }
              />
            );
          })
        }
      </section>
      <section className='change-page'>
          <button className='prev-page' disabled={ offset <= 0} onClick={ () => dispatch(previousPage(offset)) }>
            <img src={LeftArrow} alt="Página Anterior" />
          </button>
          <h1 className='curr-page'>Página: {page}</h1>
          <button className='next-page' onClick={ () => dispatch(nextPage(offset)) }>
            <img src={RightArrow} alt="Proxima Página" />
          </button>
      </section>
    </section>
  )
}

const mapStateToProps = (state) => ({
  comicsReducer: state.comicsReducer
});

Products.propTypes = {
  dispatch: PropTypes.func,
  comicsReducer: PropTypes.object,
};

export default connect(mapStateToProps)(Products);
