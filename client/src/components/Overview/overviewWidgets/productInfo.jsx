import React, {Component} from 'react';
import ReactDom from 'react-dom';


class ProductInfo extends Component{
  constructor(props){
    super(props)
  }
  render(){

    return(

      <>

      <div style={{border: '10px solid black'}}>
{/* STARS
CATEGORY
TITLE
DEFAULT PRICE --- responsive to style...
  PRICE (FROM STYLE)
      IF SALE...roduct 17069 ..style 90262 has sale */}

        <p>{this.props.productCategory}</p>
        <p>{this.props.productName}</p>
        <p>{this.props.selectedStylePrice}</p>

        {this.props.salePrice ?
        <p>sale price:{this.props.salePrice}</p>
        : <p></p>}


      </div>

      </>

    )
  }
}

export default ProductInfo