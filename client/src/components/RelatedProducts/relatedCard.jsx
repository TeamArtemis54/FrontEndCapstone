import React from 'react';

let RelatedCard = (props) => {
  return (
    <div className="relatedCard">
      <img src={props.thumbnails}/>
      <p className="relatedItem-category">{props.product.category}</p>
      <p className="relatedItem-name">{props.product.name}</p>
      <p className="relatedItem-price">{props.product.default_price}</p>
    </div>
  )
}

export default RelatedCard;