import React, { PureComponent, Fragment } from 'react';
import ProductList from './components/productList';
import ProductDetails from './components/productDetails';
import './layout.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 'list', // details
      productSelected: []
    };
  };

  handleAppStatus = (productData, state) => {
    this.setState({
      status: state,
      productSelected: productData
    });
  }

  render() {
    const { status, productSelected } = this.state;
    return (
      <Fragment>
        {
          status === 'list' && <ProductList handleAppStatus={this.handleAppStatus} />
        }
        {
          status === 'details' && <ProductDetails handleAppStatus={this.handleAppStatus} productSelected={productSelected} />
        }
      </Fragment>
    );
  }
}

export default App;

