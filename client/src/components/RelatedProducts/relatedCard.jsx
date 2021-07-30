import React from 'react';

let RelatedCard = (props) => {
  return (
    <div className="relatedCard" onClick={(e) => props.clickFn(props.product, e)}>
      <div className="card-imgContainer">
        {props.thumbnails[0] === null ?
        <div className="card-thumbnail">No image available</div> :
        <img className="card-thumbnail" src={props.thumbnails}/> }
      </div>
      {/* maybe send message that says no image available */}
      <div className="card-infoContainer">
        <p className="relatedItem-category">{props.product.category}</p>
        <p className="relatedItem-name">{props.product.name}</p>
        <p className="relatedItem-price">${props.product.default_price}</p>
        <p>stars component</p>
      </div>
    </div>
  )
}

export default RelatedCard;