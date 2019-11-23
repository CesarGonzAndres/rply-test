import React, { Fragment, PureComponent } from 'react';

import Carousel from './components/carousel';

import './styles.scss';

class Product extends PureComponent {
  render() {
    const { productData, handleAppStatus } = this.props;
    return (
      <div className="mr-2 mb-2">
        {productData && 
          <Fragment>
            <div className="cardStyle card">
              <Carousel className="pointer" images={productData.images} handleAppStatus={handleAppStatus} productData={productData} />
              <div className="card-body mt-1">
                <h5 className="card-title mb-0">{productData.attributes[0].value}</h5>
                <p className="card-text mb-0">{productData.name}</p>
                <div className="column start">
                  <del><small className="text-muted">{productData.prices.formattedListPrice}</small></del>
                  <small className="text-muted">{productData.prices.formattedOfferPrice}</small>
                  <small className="text-muted">{productData.prices.formattedCardPrice}</small>
                </div>
              </div>
            </div>
          </Fragment>
        }
    </div>
    );
  }
}

export default Product;

