import React from 'react';

const CompareModal = (props) => {
  if (!props.show) {
    return null
  }
  console.log('p', props);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-hedaer">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          <p>{props.info.category}</p>
          <p>{props.info.name}</p>
          <p>{props.info.price}</p>
          <p>{props.info.avgRating}</p>
          <p>{props.info.totalReviews}</p>
        </div>
        <div className="modal-footer">
          <button onClick={props.closeClick} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default CompareModal;
