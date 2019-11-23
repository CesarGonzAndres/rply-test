import React, { PureComponent } from 'react';

import Product from './layout';
import axios from 'axios';

class ProductContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      previewImages: [], 
      loading: false  
    };
  };

  async componentDidMount() {
    await axios.get(`http://localhost:3001/api/product?productSKU=${this.props.product.productSKU}`)
      .then((response) => {
        const info = response.data.data;
        this.setState({ 
          productData: JSON.parse(info), 
          loading: false
        });
      });
  }

  render() {
    const { productData } = this.state;
    const { handleAppStatus } = this.props;
    return (
      <Product productData={productData} handleAppStatus={handleAppStatus} />
    );
  }
}

export default ProductContainer;
