import React, { PureComponent, Fragment } from 'react';

import ProductsList from './layout';
import axios from 'axios';

class ProductsListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      products: [], 
      loading: false  
    };
  };

  
  async componentDidMount() {
    await axios.get(`http://localhost:3001/api/products_list`)
      .then((response) => {
        const products = Object.keys(response.data.products).map(i => response.data.products[i])
        this.setState({ 
          products: products, 
          loading: false
        });
      });
  }

  render() {
    const { products } = this.state;
    const { handleAppStatus } = this.props;
    return (
      <Fragment>
        <ProductsList products={products} handleAppStatus={handleAppStatus} />
      </Fragment>
    );
  }
}

export default ProductsListContainer;
