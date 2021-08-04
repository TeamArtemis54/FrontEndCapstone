// import React from 'react';
// import RelatedCard from './relatedCard.jsx';
// const axios = require('axios');

// class RelatedList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: [],
//       thumbnails: []
//     }
//   }

//   getProductInfo() {
//     axios.get(`/api/products/${this.props.productId}`)
//       .then((response) => {
//         let newData = this.state.products.concat(response.data);
//         this.setState({
//           products: newData
//         })
//       });
//   }

//   getProductThumbnail() {
//     axios.get(`/api/products/${this.props.productId}/styles`)
//       .then((response) => {
//         // console.log(response.data.results);
//         let newPic = this.state.thumbnails.concat(response.data.results[0].photos[0].thumbnail_url);
//         this.setState({
//           thumbnails: newPic
//         })
//         // console.log(this.state.thumbnails);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }

//   componentDidMount() {
//     this.getProductInfo();
//     this.getProductThumbnail();
//   }

//   render(props) {
//     return (
//       <div className="relatedList">
//         {this.state.products.map((item, i) => {
//           return <RelatedCard product={item} key={i} thumbnails={this.state.thumbnails} starClickFn={this.props.starClick} cardClickFn={this.props.cardClick}/>
//         })}
//       </div>
//     )
//   }

// }

// export default RelatedList;















import React, { useState, useEffect } from 'react';
import RelatedCard from './relatedCard.jsx';
import CardComponent from '../CardComponent.jsx';
import arrow from '../assets/next.png';

const axios = require('axios');

const RelatedList = (props) => {

  // this is the current product being displayed in overview
  const { currentProduct, starFn } = props;

  // this will store the items related to the current product
  const [relatedIdsList, setRelatedIdsList] = useState([]);

  // this will hold the product info
  const [products, setProducts] = useState([]);

  // this will store product thumbnails
  const [thumbnails, setThumbnails] = useState([]);

  // this will store the reviews stars
  const [reviewsMeta, setReviewsMeta] = useState([]);

  // console.log('related is: ', props.related);


  // anytime 'currentProduct' value changes, whatever's inside this useEffect will run
  useEffect(() => {
    // upon receiving currentProduct, i want to get relatedItems
    axios.get(`/api/products/${currentProduct.id}/related`)
      .then((response) => {
        // console.log('related response', response.data);
        setRelatedIdsList(response.data);
      })
      .catch((err) => {
        console.log('related error', err);
      });
  }, [currentProduct]);

  // if relatedIdsList changes value, then run whatever is inside
  useEffect(() => {
    // this would mean that data has now been added
    if(relatedIdsList.length > 0) {
      // console.log('data has now entered');
      // console.log('relatedList', relatedIdsList);
      relatedIdsList.map((item, i) => {
        getProductInfo(item);
        getProductThumbnail(item);
        getReviewsMeta(item);
      })
    } else {
      console.log('relatedList not yet in');
    }

  }, [relatedIdsList]);


  function getProductInfo(id) {
    axios.get(`/api/products/${id}`)
      .then((response) => {
        // console.log('relatedItemData', response.data);
        let data = response.data;
        setProducts(products => [...products, data]);
      })
      .catch((err) => console.log(err));
  }

  function getProductThumbnail(id) {
    axios.get(`/api/products/${id}/styles`)
      .then((response) => {
        // console.log('thumbnail', response.data.results[0].photos[0].thumbnail_url);
        let thumbnail = response.data.results[0].photos[0].thumbnail_url;
        setThumbnails(thumbnails => [...thumbnails, thumbnail]);
      })
      .catch((err) => console.log(err));
  }

  function getReviewsMeta(id) {
    axios.get(`/api/reviews/meta/${id}`)
      .then((response) => {
        let reviewMetaData = response.data;
        setReviewsMeta(reviewsMeta => [...reviewsMeta, reviewMetaData]);
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   // this would mean that data has now been added
  //   if(products.length > 0) {
  //     // console.log('data has now entered');
  //     console.log('products', products);
  //   } else {
  //     // console.log('not yet');
  //   }
  // }, [products]);

  return (
    // console.log('reviewsMeta', reviewsMeta),
    <div className="relatedList">
      {/* <img className="arrow__left" src={arrow} />
      <div className="relatedList__carousel"> */}
        {products.length > 0 && thumbnails.length && reviewsMeta.length > 0 ? products.map((item, i) => {
          return <CardComponent type={"related"} key={i} product={item} thumbnails={thumbnails[i]} reviewsMeta={reviewsMeta[i]} starFn={starFn}/>
        }) : console.log('not yet ready')}
      {/* </div>
      <img className="arrow__right" src={arrow} /> */}
    </div>
  )

}

export default RelatedList;