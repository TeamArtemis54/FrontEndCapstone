import React, { useState, useEffect } from 'react';
import RelatedList from './relatedList/relatedList.jsx';
import CompareModal from './relatedList/comparisonModal.jsx';
const axios = require('axios');

// This component will hold the first list which will be the related products that were determined internally

// related API products returns an array of the related items ids
// given the array of ids,
// we can generate each product information by using /products/:product_id

// will use default value item as first item 17067

// images will require 'products/productId/styles --> data.results.photos.thumbnail_url

const RelatedProductsWidget = (props) => {

  const {product} = props;

  // this will store the current product that the page is on
  const [currentProduct, setCurrentProduct] = useState({});

  // this will store the related items to the current product
  const [relatedItems, setRelatedItems] = useState([]);

  // this will store whether modal is displayed or not
  const [showModal, setShowModal] = useState(false);

  // this will store clicked product data
  const [clickedProductData, setClickedProductData] = useState({});

  // console.log('product being passed in', product);

  // this will set
  useEffect(() => {

    setCurrentProduct(product);
    // console.log('logged');
  }, [product]);

  useEffect(() => {
    // console.log('cur', currentProduct);
    getRelatedItems();
  }, [currentProduct.id])

  function getRelatedItems() {
    axios.get(`/api/products/${currentProduct.id}/related`)
      .then((response) => {
        let relatedList = response.data;
        // console.log('data', response.data);
        setRelatedItems(relatedList);
      })
      .catch((err) => console.log(err));
  }

  return(
    <div className="widget-container">
      <h1>HI</h1>
      {/* <RelatedList related={relatedItems}/> */}
    </div>
  )
}

export default RelatedProductsWidget;
