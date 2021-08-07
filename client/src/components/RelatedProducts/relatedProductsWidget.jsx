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