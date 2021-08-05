import React from 'react';

const CompareModal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.closeClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Comparing</h4>
          <button onClick={props.closeClick} className="closeButton">X</button>
        </div>
        <div className="modal-body">
          <table>
            <thead>
              <tr>
                <th>{props.clickedInfo.name}</th>
                <th className="table-mid"></th>
                <th>{props.currentInfo.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.clickedInfo.category}</td>
                <td className="table-mid">Category</td>
                <td>{props.currentInfo.category}</td>
              </tr>
              <tr>
                <td>{props.clickedInfo.price}</td>
                <td className="table-mid">Price</td>
                <td>{props.currentInfo.price}</td>
              </tr>
              <tr>
                <td>{props.clickedInfo.avgRating} ({props.clickedInfo.totalReviews})</td>
                <td className="table-mid">Average Rating (# of Reviews)</td>
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
