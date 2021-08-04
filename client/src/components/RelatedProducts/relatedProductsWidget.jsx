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

  const {product} = props;

  // this will store the current product that the page is on
  const [currentProduct, setCurrentProduct] = useState({});

  // this will store whether modal is displayed or not
  const [showModal, setShowModal] = useState(false);

  // this will store clicked product data
  const [clickedProductData, setClickedProductData] = useState({});

  // console.log('product being passed in', product);

  // product is our dependency
  // meaning after the first initial default render, it will re-render when
  // product value changes.
  useEffect(() => {
    setCurrentProduct(product);
    // console.log('logged');
  }, [product]);

  return(
    <div className="relatedWidget_container">
      <h3 className="relatedWidget_container__title">Related Products</h3>
      <RelatedList currentProduct={currentProduct} />
      <h3 className="relatedWidget_container__title">Your Outfit</h3>
      <OutfitList currentProduct={currentProduct} />
    </div>
  )
}

export default RelatedProductsWidget;
