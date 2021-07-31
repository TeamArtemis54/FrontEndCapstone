import React from 'react';
import RelatedCard from './relatedCard.jsx';
const axios = require('axios');

class RelatedList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      thumbnails: []
    }
  }

  getProductInfo() {
    axios.get(`/api/products/${this.props.productId}`)
      .then((response) => {
        let newData = this.state.products.concat(response.data);
        this.setState({
          products: newData
        })
      });
  }

  getProductThumbnail() {
    axios.get(`/api/products/${this.props.productId}/styles`)
      .then((response) => {
        // console.log(response.data.results);
        let newPic = this.state.thumbnails.concat(response.data.results[0].photos[0].thumbnail_url);
        this.setState({
          thumbnails: newPic
        })
        // console.log(this.state.thumbnails);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getProductInfo();
    this.getProductThumbnail();
  }

  render(props) {
    return (
      <div className="relatedList">
        {this.state.products.map((item, i) => {
          return <RelatedCard clickFn={this.props.clickFn} product={item} key={i} thumbnails={this.state.thumbnails}/>
        })}
      </div>
    )
  }

}

export default RelatedList;















// import React, { useState, useEffect } from 'react';
// import RelatedCard from './relatedCard.jsx';
// const axios = require('axios');

// const RelatedList = (props) => {

//   // this is the array of related items pulled in from parent
//   const { related } = props;

//   const [relatedList, setRelatedList] = useState([]);

//   // this will hold the product info
//   const [products, setProducts] = useState([]);

//   // this will store product thumbnails
//   const [thumbnails, setThumbnails] = useState([]);

//   // console.log('related is: ', props.related);

//   // anytime the related items change, this will take place
//   useEffect(() => {
//     // console.log('relatedid', related);
//     setRelatedList(related);
//     // getProductInfo();
//     // getThumbnail();
//   }, [related])

//   useEffect(() => {
//     console.log('relatedList', relatedList);
//     // relatedList is now populated with items
//     if(Array.isArray(relatedList)) {
//       // relatedList.map((item) => {
//       //   getProductInfo(item);
//       // })
//       getProductInfo();
//     }
//   }, [relatedList])

//   useEffect(() => {
//     // console.log('products', products);
//   }, [products])

//   // get product info
//   function getProductInfo() {
//     relatedList.map((itemId) => {
//       axios.get(`/api/products/${itemId}`)
//         .then((response) => {
//           // products is resetting each time
//           // console.log('specific product data', response.data);
//           // console.log('products before', products);
//           let data = products.concat(response.data);
//           // console.log('data', data);
//           setProducts(data);
//         })
//         .catch((err) => console.log(err));
//     })
//   }

//   // get thumbnails
//   function getThumbnail() {
//     axios.get(`/api/products/${related}/styles`)
//       .then((response) => {
//         let thumbnails = thumbnails.concat(response.data.results[0].photos[0].thumbnail_url);
//         // console.log(thumbnails);
//         setThumbnails(thumbnails);
//       })
//       .catch((err) => console.log(err));
//   }

//   // console.log('products', products);
//   // console.log('thumbnails', thumbnails);

//   return (
//     <div className="related-cards">
//       <h1>Hello</h1>
//       {products.map((item, i) => {
//         console.log(item);
//         return <RelatedCard product={item} key={i}/>
//       })}
//     </div>
//   )

// }

// export default RelatedList;