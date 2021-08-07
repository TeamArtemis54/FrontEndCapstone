import React from 'react';

const CompareModal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.closeClick}>
      <div className="modal__content">
        <div className="modal__content-header">
          <h4 className="modal__content-header_title">Comparing</h4>
          <button onClick={props.closeClick} className="closeButton">X</button>
        </div>
        <div className="modal__content-body">
          <table>
            <thead>
              <tr>
                <th>{props.clickedInfo.name}</th>
                <th className="modal__content-body_middle"></th>
                <th>{props.currentInfo.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.clickedInfo.category}</td>
                <td className="modal__content-body_middle">Category</td>
                <td>{props.currentInfo.category}</td>
              </tr>
              <tr>
                <td>{props.clickedInfo.price}</td>
                <td className="modal__content-body_middle">Price</td>
                <td>{props.currentInfo.price}</td>
              </tr>
              <tr>
                <td>{props.clickedInfo.avgRating} ({props.clickedInfo.totalReviews})</td>
                <td className="modal__content-body_middle">Average Rating (# of Reviews)</td>
                <td>{props.currentInfo.avgRating} ({props.currentInfo.totalReviews})</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default CompareModal;
