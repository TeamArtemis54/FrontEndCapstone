import React from 'react';
import RelatedList from './relatedList.jsx';
import CompareModal from './comparisonModal.jsx';
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
      currentProductId: 17068,
      relatedItems: [],
      showModal: false,
      productData: {},
      currentProductData: {}
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

  handleClick(targetProduct, e) {
    // get the reviews of the clicked product
    axios.get(`/api/reviews/${targetProduct.id}`)
      .then((response) => {
        let reviewData = response.data;
        // this is the number of reviews
        let numReviews = reviewData.results.length;

        let avgRating = 0;

        for (let i = 0; i < reviewData.results.length; i++) {
          avgRating += reviewData.results[i].rating;
        }
        // this is the average rating (star rating)
        avgRating = avgRating / numReviews;

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

      this.getCurrentProductInfo();

      this.setState({
        showModal: true
      })

      let time = new Date().toLocaleTimeString();
      this.sendInteraction(e.target.tagName, time);


  }

  getCurrentProductInfo() {
    axios.get(`/api/products/${this.state.currentProductId}`)
      .then((response) => {
        axios.get(`/api/reviews/${this.state.currentProductId}`)
          .then((reviewResponse) => {
            let reviewData = reviewResponse.data;
            // this is the number of reviews
            let numReviews = reviewData.results.length;

            let avgRating = 0;

            for (let i = 0; i < reviewData.results.length; i++) {
              avgRating += reviewData.results[i].rating;
            }
            // this is the average rating (star rating)
            avgRating = avgRating / numReviews;

            this.setState({
              currentProductData: {
                category: response.data.category,
                name: response.data.name,
                price: response.data.default_price,
                avgRating: avgRating,
                totalReviews: numReviews
              }
            })
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err));
  }


  closeModal() {
    this.setState({
      showModal: false
    })
  }

  sendInteraction(clickedElement, time) {
    axios.post('/api/interactions', {
      element: clickedElement,
      widget: 'Related Products',
      time: time,
    })
    .then((response) => console.log(response.statusText))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="widget_container">
        <h3 className="widget_title">Related Products</h3>
        <div className="relatedlist_container">
          {this.state.relatedItems.map((item, i) => {
            return <RelatedList clickFn={this.handleClick} productId={item} key={i} />
          })}
        </div>
        <CompareModal clickedInfo={this.state.productData} currentInfo={this.state.currentProductData} show={this.state.showModal} closeClick={this.closeModal}/>
      </div>
    )
  }

}
export default RelatedProductsWidget;
















// import React, { useState, useEffect } from 'react';
// import RelatedList from './relatedList.jsx';
// import CompareModal from './comparisonModal.jsx';
// const axios = require('axios');

// // This component will hold the first list which will be the related products that were determined internally

// // related API products returns an array of the related items ids
// // given the array of ids,
// // we can generate each product information by using /products/:product_id

// // will use default value item as first item 17067

// // images will require 'products/productId/styles --> data.results.photos.thumbnail_url

// const RelatedProductsWidget = (props) => {

//   const {product} = props;

//   // this will store the current product that the page is on
//   const [currentProduct, setCurrentProduct] = useState({});

//   // this will store the related items to the current product
//   const [relatedItems, setRelatedItems] = useState([]);

//   // this will store whether modal is displayed or not
//   const [showModal, setShowModal] = useState(false);

//   // this will store clicked product data
//   const [clickedProductData, setClickedProductData] = useState({});

//   // console.log('product being passed in', product);

//   // this will set
//   useEffect(() => {

//     setCurrentProduct(product);
//     // console.log('logged');
//   }, [product]);

//   useEffect(() => {
//     // console.log('cur', currentProduct);
//     getRelatedItems();
//   }, [currentProduct.id])

//   function getRelatedItems() {
//     axios.get(`/api/products/${currentProduct.id}/related`)
//       .then((response) => {
//         let relatedList = response.data;
//         // console.log('data', response.data);
//         setRelatedItems(relatedList);
//       })
//       .catch((err) => console.log(err));
//   }

//   return(
//     <div className="widget-container">
//       <h1>HI</h1>
//       <RelatedList related={relatedItems}/>
//     </div>
//   )
// }

// export default RelatedProductsWidget;
