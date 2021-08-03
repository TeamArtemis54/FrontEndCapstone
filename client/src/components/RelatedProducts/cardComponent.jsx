import React from 'react';
import Stars from '../reusable_components/Stars.jsx';
import Button from '../reusable_components/Button.jsx';

const axios = require('axios');

const CardComponent = (props) => {
  // destructuring the type that is sent in
  const { type } = props;
  // destructuring the productId that is sent in
  const { productId } = props;

  function RelatedCard() {
    // if it has thumbnail
    // if it doesn't have thumbnail
    return (
      <div className="card">
        <div className="card__mediaBox">

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
      console.log('hello');
    }

    return (
      <div className="card">
        <div className="card__mediaBox">
          <div className="addItem_Card">
            <p className="addItem_Card__plus_sign">&#43;</p>
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