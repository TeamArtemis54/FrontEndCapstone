import React from 'react';
const axios = require('axios');

let RelatedCard = (props) => {

  function getProductInfo() {
    axios.get(`/api/products/${props.productId}`)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    getProductInfo(),
    <div className="card">
      {/* <img className="cardImage" src=""></img>
      <p>{props.category}</p>
      <p>{props.name}</p>
      <p>{props.price}</p> */}
      {/* Star Component */}
      <p>{props.product}</p>
    </div>
  )
}

// class RelatedCard extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render(props) {
//     return (
//       <div>
//         <p>{this.props.product}</p>
//       </div>
//     )
//   }

// }

export default RelatedCard;