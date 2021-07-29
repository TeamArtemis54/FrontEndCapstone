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
        </div>
        <div className="modal-body">
          <table>
            <tr>
              <th>{props.info.name}</th>
              <th className="table-mid"></th>
              <th>current product on overview</th>
            </tr>
            <tr>
              <td>{props.info.category}</td>
              <td className="table-mid">Category</td>
              <td>overview product</td>
            </tr>
            <tr>
              <td>{props.info.price}</td>
              <td className="table-mid">Price</td>
              <td>Overview product</td>
            </tr>
            <tr>
              <td>{props.info.avgRating} ({props.info.totalReviews})</td>
              <td className="table-mid">Average Rating (# of Reviews)</td>
              <td>Overview product</td>
            </tr>
          </table>
        </div>
        <div className="modal-footer">
          <button onClick={props.closeClick} className="button">X</button>
        </div>
      </div>
    </div>
  )
}

export default CompareModal;
