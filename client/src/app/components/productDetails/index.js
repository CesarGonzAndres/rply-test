import React, { PureComponent } from 'react';
import Slider from "react-slick";
import './styles.scss';

class ProductDetails extends PureComponent {

  state = {
    nav1: null,
    nav2: null,
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      easing: 'linear',
      arrows: true
    }
  };

  async componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const { nav1, nav2, settings } = this.state;
    const { productSelected, handleAppStatus } = this.props;

    return (
      <div className="container">
        <h3 className="pointer mt-4" onClick={() => handleAppStatus([], 'list')}><i class="fa fa-arrow-left"></i> Atras</h3>
        <div className="row">
          <div className="container col-lg-6 col-md-12 col-sm-12 mt-4 infoContainer">
            <div className="row">
              <Slider 
                asNavFor={nav2}
                slidesToShow={productSelected.images.length}
                vertical={true}
                swipeToSlide={true}
                focusOnSelect={true}
                className="smSlide"
              >
                {productSelected.images.map((image, index) => 
                  <div key={index} className="item">
                    <img src={`http:${image}`} width="100px" alt="preview" />
                  </div>
                )}
              </Slider>
              <Slider 
                ref={slider => (this.slider2 = slider)} 
                asNavFor={nav1} className="bgSlide ml-4" 
                {...settings}
              >
                {productSelected.images.map((image, index) => 
                  <div key={index} className="item">
                    <img className="bgSlide" src={`http:${image}`} alt="preview" />
                  </div>
                )}
              </Slider>
            </div>
          </div>
          <div className="container col-lg-6 col-md-12 col-sm-12 mt-4">
            <h5>{productSelected.attributes[0].value}</h5>
            <h3>{productSelected.name}</h3>
            <small className="text-muted">SKU: {productSelected.partNumber}</small>
            <p>{productSelected.shortDescription}</p>
            <div className="row space-between">
              <small className="text-muted ml-2">Normal</small>
              <del><small className="text-muted mr-2">{productSelected.prices.formattedListPrice}</small></del>
            </div>
            <div className="row space-between">
              <small className="text-muted ml-2">Internet</small>
              <small className="text-muted mr-2">{productSelected.prices.formattedOfferPrice}</small>
            </div>
          </div>
          <div className="accordion full-width mb-3" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ESPECIFICACIONES
                  </button>
                </h2>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  <table className="table table-striped">
                    <tbody>
                      {
                        productSelected.attributes.map(attrib => 
                          <tr>
                            <td>
                              {attrib.name}
                            </td>
                            <td>
                              {attrib.value}
                            </td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    GARANTÍA LEGAL Y DEVOLUCIONES
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                  <h3>GARANTÍA LEGAL Y DEL FABRICANTE</h3>
                  <p>La Garantía legal establece la cobertura dentro de los 3 primeros meses de adquirido el producto 
                  ante fallas, defectos de fabricación, no tuviera las características o no corresponda a lo informado 
                  al momento de la compra. En Ripley.com puedes retractarte de tu compra en los 10 días contados desde 
                  su recepción. Ver más sobre derecho a retracto.</p>
                  <p>La Garantía del Fabricante hace referencia a un compromiso de cobertura adicional que podría 
                  superar la garantía legal de los 3 primeros meses. Posteriormente, el fabricante es quien será 
                  responsable de recepcionar y velar por la garantía dependiendo de las vigencia y las condiciones 
                  ofrecidas y establecidas en cada caso. Ver más sobre garantía legal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
