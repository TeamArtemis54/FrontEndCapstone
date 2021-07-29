import React from 'react';
import RelatedList from './relatedList.jsx';
import CompareModal from './comparisonModal.jsx';
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
      relatedItems: [],
      showModal: false,
      productData: {}
    }

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  handleClick(targetProduct) {
    console.log(targetProduct.category);
    console.log(targetProduct.name);
    console.log(targetProduct.default_price);


    // get the reviews of the clicked product
    axios.get(`/api/reviews/${targetProduct.id}`)
      .then((response) => {
        let numReviews = 0;
        let avgRating = 0;
        let reviewData = response.data;
        // this is the number of reviews
        numReviews = reviewData.results.length;

        for (let i = 0; i < reviewData.results.length; i++) {
          avgRating += reviewData.results[i].rating;
        }
        // this is the average rating (star rating)
        avgRating = avgRating / numReviews;
        console.log(avgRating + ` (${numReviews})`);

        this.setState({
          productData: {
            category: targetProduct.category,
            name: targetProduct.name,
            price: targetProduct.default_price,
            avgRating: avgRating,
            totalReviews: numReviews
          }
        })

      })
      .catch((err) => console.log(err));

      this.setState({
        showModal: !this.state.showModal
      })

  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        <h3 className="relatedTitle">Related Products</h3>
        <div className="relatedContainer">
          {this.state.relatedItems.map((item, i) => {
            return <RelatedList clickFn={this.handleClick} productId={item} key={i} />
          })}
        </div>
        <CompareModal info={this.state.productData} show={this.state.showModal} closeClick={this.closeModal}/>
      </div>
    )
  }

}
export default RelatedProductsWidget;