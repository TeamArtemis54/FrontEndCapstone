import React from 'react';

let RelatedCard = (props) => {
  return (
    <div className="relatedCard">
      {props.thumbnails[0] === null ?
      <div>No image available</div> :
      <img src={props.thumbnails}/> }
      {/* maybe send message that says no image available */}
      <p className="relatedItem-category">{props.product.category}</p>
      <p className="relatedItem-name">{props.product.name}</p>
      <p className="relatedItem-price">${props.product.default_price}</p>
    </div>
  )
}

export default RelatedCard;