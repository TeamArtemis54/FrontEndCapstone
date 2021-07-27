import React from 'react';
import RelatedCard from './relatedCard.jsx';
import './relatedStyles.css';
const axios = require('axios');

// This component will hold the first list which will be the related products that were determined internally

// related API products returns an array of the related items ids
// given the array of ids,
// we can generate each product information by using /products/:product_id

// will use default value item as first item 17067

// images will require 'products/productId/styles --> data.results.photos.thumbnail_url

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductId: 17067,
      relatedItems: []
    }
  }

  getRelatedItems() {
    axios.get(`http://localhost:3000/api/products/${this.state.currentProductId}/related`)
      .then((response) => {
        let related = response.data;
        this.setState({
          relatedItems: related
        })
      })
  }

  componentDidMount() {
    this.getRelatedItems();
  }

  render() {
    return (
      <div className="RelatedBox">
        <h3 className="relatedTitle">Related Products</h3>
        {this.state.relatedItems.map((item, i) => {
          return <RelatedCard product={item} key={i}/>
        })}
      </div>
    )
  }

}
export default RelatedProducts;