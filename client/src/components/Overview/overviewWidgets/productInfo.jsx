import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Stars from './../../reusable_components/Stars.jsx';
const axios = require('axios');



class ProductInfo extends Component{
  constructor(props){
    super(props)

    this.state = {
      reviewsMeta: {}
    }
  }

  getReviewsMeta() {
    // axios.get(`/api/reviews/meta/${this.props.product.id}`)
    axios.get(`/api/reviews/meta/1701`)
      .then((response) => {
        this.setState({
          reviewsMeta: response.data
        })
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getReviewsMeta();
  }

  render(){

    return(

      <>

      <div>

        <Stars review_meta={this.state.reviewsMeta} />

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