import React, {Component} from 'react';
import ReactDom from 'react-dom';


class ProductInfo extends Component{
  constructor(props){
    super(props)
  }
  render(){

    return(

      <>

      <div>

        <p id='category-name'>{this.props.productCategory}</p>
        <p id='product-name'>{this.props.productName}</p>
        <p id='selected-style-price'>${this.props.selectedStylePrice}</p>
        <p id='style-name'><span>STYLE > </span> <span>{this.props.styleName}</span></p>

        {this.props.salePrice ?
        <p>sale price:{this.props.salePrice}</p>
        : <p></p>}

      </div>

      </>

    )
  }
}

export default ProductInfo