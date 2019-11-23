import React, { PureComponent } from 'react';
import Product from './components/product';
import './styles.scss';

class ProductsList extends PureComponent {
  render() {
    const { products, handleAppStatus } = this.props;
    return (
      <div className="container">
        <h2 className="ml-2 mt-4">LISTA DE PRODUCTOS</h2>
        <hr />
        <div className="row start padd-20">
          {
            products && products.map((product, index) => <Product key={index} product={product} handleAppStatus={handleAppStatus} />
          )}
        </div>
      </div>
    );
  }
}

export default ProductsList;
