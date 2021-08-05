import React, { useState, useEffect } from 'react';
import Stars from '../reusable_components/Stars.jsx';
import Button from '../reusable_components/Button.jsx';

const axios = require('axios');

const CardComponent = (props) => {
  // destructuring the type that is sent in
  const { type, productId, starFn, cardFn } = props;
  // destructuring the productId that is sent in
  // const { productId } = props;


  // FOR RELATED CARD
  // destructuring the product and thumbnails needed for the card
  const { product, thumbnails, reviewsMeta } = props;

  function RelatedCard() {
    // console.log('product', product);
    // console.log('thumbnails', thumbnails);
    // console.log('reviewMEta', reviewsMeta);
    return (
      <div className="card" onClick={() => cardFn(product)}>
        <div className="card__mediaBox">
          {/* // if it has thumbnail
          // if it doesn't have thumbnail */}
          {thumbnails === null ?
            <div className="card__mediaBox__thumbnail">No image available</div> :
            <div className="card__mediaBox__thumbnail" style={{
              backgroundImage: `url(${thumbnails})`
            }}>
              <p onClick={(e) => starFn(product, e)} className="card__mediaBox__thumbnail__star">&#9733;</p>
            </div>
          }
        </div>
        <div className="card__info">
          <p className="card__info__category">{product.category}</p>
          <p className="card__info__name">{product.name}</p>
          <p className="card__info__price">${product.default_price}</p>
          {reviewsMeta !== undefined ?
            <Stars review_meta={reviewsMeta}/> :
            console.log('not ready')
          }

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


  // FOR ADD CARD
  const { addFn } = props;

  function AddCard() {

    return (
      <div className="card" >
        <div className="card__mediaBox">
          <div className="addItem_Card">
            <p className="addItem_Card__plus_sign" onClick={() => addFn()}>&#43;</p>
          </div>
        </div>
        <Button onClick={() => addFn()} class={"addCard_button"} children={'Add To Outfit'} />
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