import React, { useState, useEffect } from 'react';
import RelatedList from './relatedList/relatedList.jsx';
import CompareModal from './relatedList/comparisonModal.jsx';
import OutfitList from './outfitList/OutfitList.jsx';

const axios = require('axios');

// This component will hold the first list which will be the related products that were determined internally

// related API products returns an array of the related items ids
// given the array of ids,
// we can generate each product information by using /products/:product_id

// will use default value item as first item 17067

// images will require 'products/productId/styles --> data.results.photos.thumbnail_url

const RelatedProductsWidget = (props) => {

  const { product, changeMainProductFn } = props;

  // console.log('the PRODUCT BEING DISPLAYED', product);

  // this will store the current product that the page is on
  const [currentProduct, setCurrentProduct] = useState({});

  // this will store whether modal is displayed or not
  const [showModal, setShowModal] = useState(false);

  // this will store clicked product data
  const [clickedProductData, setClickedProductData] = useState({});

  const [modalCurrData, setModalCurrData] = useState({});
  const [modalTargetData, setModalTargetData] = useState({});

  // console.log('product being passed in', product);

  // product is our dependency
  // meaning after the first initial default render, it will re-render when
  // product value changes.
  useEffect(() => {
    setCurrentProduct(product);
    // console.log('logged');
  }, [product]);

  function handleStarClick(targetProduct, e) {
    // console.log('clicked');
    axios.get(`/api/reviews/${targetProduct.id}`)
      .then((response) => {
        let reviewData = response.data;
        let numReviews = reviewData.results.length;
        let avgRating = 0;
        for (let i = 0 ; i < reviewData.results.length; i++) {
          avgRating += reviewData.results[i].rating;
        }
        avgRating = avgRating / numReviews;

        setModalTargetData({
          category: targetProduct.category,
          name: targetProduct.name,
          price: targetProduct.default_price,
          avgRating: avgRating,
          totalReviews: numReviews
        })
      })
      .catch((err) => console.log(err));

      getCurrentProductInfo();

      setShowModal(true);

      let time = new Date().toLocaleTimeString();
      sendInteraction(e.target.tagName, time);
  }

  function getCurrentProductInfo() {
    axios.get(`/api/products/${product.id}`)
      .then((response) => {
        axios.get(`/api/reviews/${product.id}`)
          .then((reviewsResponse) => {
            let reviewData = reviewsResponse.data;
            let numReviews = reviewData.results.length;
            let avgRating = 0;
            for (let i = 0 ; i < reviewData.results.length; i++) {
              avgRating += reviewData.results[i].rating;
            }
            avgRating = avgRating / numReviews;

            setModalCurrData({
              category: response.data.category,
              name: response.data.name,
              price: response.data.default_price,
              avgRating: avgRating,
              totalReviews: numReviews
            })
          })
          .catch((err) => console.log('reviews api err', err));
      })
      .catch((err) => console.log('products api err', err));
  }

  // send interaction function
  function sendInteraction(clickedElement, time) {
    axios.post('/api/interactions', {
      element: clickedElement,
      widget: 'Related Products',
      time: time
    })
      .then((response) => console.log(response.statusText))
      .catch((err) => console.log(err));
  }

  function closeModal() {
    setShowModal(false);
  }


  // ATTENTION!!!!!
  // this function will get replaced by changeMainProductFn passed in from prop
  // function handleCardClick(clickedProduct) {
  //   // here I want to be able to send the clicked product id to the overview component
  //   console.log(clickedProduct);
  // }
  // adding some comments to render change

  return(
    <div className="relatedWidget_container">
      <h3 className="relatedWidget_container__title">Related Products</h3>
      <RelatedList currentProduct={currentProduct} starFn={handleStarClick} cardFn={changeMainProductFn}/>
      <h3 className="relatedWidget_container__title">Your Outfit</h3>
      <OutfitList currentProduct={currentProduct} />
      <CompareModal clickedInfo={modalTargetData} currentInfo={modalCurrData} show={showModal} closeClick={closeModal}/>
    </div>
  )
}

export default RelatedProductsWidget;










// import React from 'react';
// import RelatedList from './relatedList/relatedList.jsx';
// import CompareModal from './relatedList/comparisonModal.jsx';
// import UserList from './outfitList/userList.jsx';

// const axios = require('axios');

// // This component will hold the first list which will be the related products that were determined internally

// // related API products returns an array of the related items ids
// // given the array of ids,
// // we can generate each product information by using /products/:product_id

// // will use default value item as first item 17067

// // images will require 'products/productId/styles --> data.results.photos.thumbnail_url

// class RelatedProductsWidget extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentProductId: 17068,
//       relatedItems: [],
//       showModal: false,
//       productData: {},
//       currentProductData: {},
//       starClicked: false
//     }

//     this.handleStarClick = this.handleStarClick.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.handleCardClick = this.handleCardClick.bind(this);
//   }

//   getRelatedItems() {
//     axios.get(`http://localhost:3000/api/products/${this.state.currentProductId}/related`)
//       .then((response) => {
//         let related = response.data;
//         this.setState({
//           relatedItems: related
//         })
//       })
//   }

//   componentDidMount() {
//     this.getRelatedItems();
//   }

//   handleStarClick(targetProduct, e) {
//     // get the reviews of the clicked product
//     axios.get(`/api/reviews/${targetProduct.id}`)
//       .then((response) => {
//         let reviewData = response.data;
//         // this is the number of reviews
//         let numReviews = reviewData.results.length;

//         let avgRating = 0;

//         for (let i = 0; i < reviewData.results.length; i++) {
//           avgRating += reviewData.results[i].rating;
//         }
//         // this is the average rating (star rating)
//         avgRating = avgRating / numReviews;

//         this.setState({
//           productData: {
//             category: targetProduct.category,
//             name: targetProduct.name,
//             price: targetProduct.default_price,
//             avgRating: avgRating,
//             totalReviews: numReviews
//           }
//         })
//       })
//       .catch((err) => console.log(err));

//       this.getCurrentProductInfo();

//       this.setState({
//         showModal: true
//       })

//       let time = new Date().toLocaleTimeString();
//       this.sendInteraction(e.target.tagName, time);


//   }

//   getCurrentProductInfo() {
//     axios.get(`/api/products/${this.state.currentProductId}`)
//       .then((response) => {
//         axios.get(`/api/reviews/${this.state.currentProductId}`)
//           .then((reviewResponse) => {
//             let reviewData = reviewResponse.data;
//             // this is the number of reviews
//             let numReviews = reviewData.results.length;

//             let avgRating = 0;

//             for (let i = 0; i < reviewData.results.length; i++) {
//               avgRating += reviewData.results[i].rating;
//             }
//             // this is the average rating (star rating)
//             avgRating = avgRating / numReviews;

//             this.setState({
//               currentProductData: {
//                 category: response.data.category,
//                 name: response.data.name,
//                 price: response.data.default_price,
//                 avgRating: avgRating,
//                 totalReviews: numReviews
//               }
//             })
//           })
//           .catch((err) => console.log(err))
//       })
//       .catch((err) => console.log(err));
//   }


//   closeModal() {
//     this.setState({
//       showModal: false
//     })
//   }

//   sendInteraction(clickedElement, time) {
//     axios.post('/api/interactions', {
//       element: clickedElement,
//       widget: 'Related Products',
//       time: time,
//     })
//     .then((response) => console.log(response.statusText))
//     .catch((err) => console.log(err));
//   }

//   handleCardClick(e) {
//     // here i want to be able to send the current product id i clicked on to the overview component
//     console.log('clicked');
//     console.log(e.target);
//   }

//   render() {
//     return (
//       <div className="widget_container">
//         <h3 className="widget_title">Related Products</h3>
//         <div className="relatedlist_container">
//           {this.state.relatedItems.map((item, i) => {
//             return <RelatedList productId={item} key={i} starClick={this.handleStarClick} cardClick={this.handleCardClick} />
//           })}
//         </div>
//         <h3 className="userList_title">Your Outfit</h3>
//         <div className="userList_container">
//           <UserList />
//         </div>
//         <CompareModal clickedInfo={this.state.productData} currentInfo={this.state.currentProductData} show={this.state.showModal} closeClick={this.closeModal}/>
//       </div>
//     )
//   }

// }
// export default RelatedProductsWidget;