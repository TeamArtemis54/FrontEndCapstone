import React from 'react';

let RelatedCard = (props) => {
  return (
    <div className="relatedCard" onClick={(e) => props.clickFn(props.product, e)}>
      <div className="card_img">
        {props.thumbnails[0] === null ?
        <div className="card_img__thumbnail">No image available</div> :
        // <img className="card-thumbnail" src={props.thumbnails}/>
        <div className="card_img__thumbnail" style={{
          backgroundImage: `url(${props.thumbnails})`
        }}>
          <p onClick={() => props.favorite()} className="card_img__star">&#9733;</p>
        </div>
        }
      </div>
      {/* maybe send message that says no image available */}
      <div className="card_info">
        <p className="card_info__category">{props.product.category}</p>
        <p className="card_info__name">{props.product.name}</p>
        <p className="card_info__price">${props.product.default_price}</p>
        <p>stars component</p>
      </div>
    </div>
  )
}

export default RelatedCard;