import React, { useState, useEffect } from 'react';
import Stars from '../reusable_components/Stars.jsx';
import Button from '../reusable_components/Button.jsx';

const axios = require('axios');

const CardComponent = (props) => {
  // destructuring the type that is sent in
  const { type } = props;
  // destructuring the productId that is sent in
  const { productId } = props;


  // FOR RELATED CARD
  // destructuring the product and thumbnails needed for the card
  const { product, thumbnails } = props;

  function RelatedCard() {
    // if it has thumbnail
    // if it doesn't have thumbnail
    console.log('product', product);
    console.log('thumbnails', thumbnails);
    return (
      <div className="card">
        <div className="card__mediaBox">
          {thumbnails === null ?
            <div>No image available</div> :
            <div>
              <img src={thumbnails}/>
            </div>
          }
        </div>
        <div>
          <p>{product.category}</p>

        </div>
      </div>
    )
  }

  function OutfitCard() {
    return (
      <div className="card">
        <div className="card__mediaBox">

        </div>
      </div>
    )
  }

  function AddCard() {

    function handleAddButton() {
      // will need to send data
      if (productId) {
        // console.log('productid in card', productId);
      }
    }

    return (
      <div className="card">
        <div className="card__mediaBox">
          <div className="addItem_Card">
            <p onClick={() => handleAddButton()} className="addItem_Card__plus_sign">&#43;</p>
          </div>
        </div>
        <Button onClick={() => handleAddButton()} class={"addCard_button"} children={'Add To Outfit'} />
      </div>
    )
  }

  if (type === 'related') {
    // if type is 'related'
    return <RelatedCard />
  } else if (type === 'outfit') {
    // if type is 'outfit'
    return <OutfitCard />
  } else {
    // if type is 'add'
    return <AddCard />
  }
}

export default CardComponent;