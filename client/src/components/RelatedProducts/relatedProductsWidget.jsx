import React from 'react';
import RelatedList from './relatedList.jsx';
import './relatedStyles.scss';
const axios = require('axios');

// This component will hold the first list which will be the related products that were determined internally

// related API products returns an array of the related items ids
// given the array of ids,
// we can generate each product information by using /products/:product_id

// will use default value item as first item 17067

// images will require 'products/productId/styles --> data.results.photos.thumbnail_url

class RelatedProductsWidget extends React.Component {
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
      <div>
        <h3 className="relatedTitle">Related Products</h3>
        <div className="relatedContainer">
          {this.state.relatedItems.map((item, i) => {
            return <RelatedList productId={item} key={i}/>
          })}
        </div>
      </div>
    )
  }

}
export default RelatedProductsWidget;