import React from 'react';

const CompareModal = (props) => {
  if (!props.show) {
    return null
  }
  console.log('p', props);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Comparing</h4>
          <p className="modal-productName">{props.info.name}</p>
        </div>
        <div className="modal-body">
          <p>{props.info.category}</p>
          <p>{props.info.price}</p>
          <p>{props.info.avgRating}</p>
          <p>{props.info.totalReviews}</p>
        </div>
        <div className="modal-footer">
          <button onClick={props.closeClick} className="button">X</button>
        </div>
      </div>
    </div>
  )
}

export default CompareModal;
