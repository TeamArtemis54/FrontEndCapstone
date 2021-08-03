import React, { useState, useEffect } from 'react';
import Button from '../../reusable_components/Button.jsx';

const AddItemCard = (props) => {

  function handleAddButton() {
    console.log('clickityclackclack');
  }

  return (
    <div className="addItemCard">
      <div className="addItemCard_plus">
        <p className="addItemCard_deleteButton">
          <span className="addItemCard_deleteButton__box">&#215;</span>
        </p>
        <p className="addItemCard_plus__sign">&#43;</p>
      </div>
      <Button onClick={() => handleAddButton()} class={"addItemCard__button"} children={'Add To Outfit'}/>
    </div>
  )
}

export default AddItemCard;