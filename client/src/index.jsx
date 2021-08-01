import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header/Header.jsx';
// OVERVIEW

// RELATED PRODUCTS
import RelatedProductsWidget from './components/RelatedProducts/RelatedProductsWidget.jsx';
import RelatedList from './components/RelatedProducts/relatedList.jsx';
// RATINGS AND REVIEWS
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';

const App = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [review_meta, setReviewMeta] = useState({});

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProduct(response.data[4]);
        axios.get(`/api/reviews/${response.data[4].id}`)
          .then((response) => {
            setReviews(response.data.results);
          });
        axios.get(`/api/reviews/meta/${response.data[4].id}`)
          .then((response) => {
            setReviewMeta(response.data);
          });
      });
  }, []);

  return (
    <div className='entry-point'>
      <Header />

      <div className='overview'>
        OVERVIEW
        {/* PLACEHOLDER FOR OVERVIEW COMPONENT */}
      </div>


      <RelatedProductsWidget />

      <RatingsAndReviews
        reviews={reviews}
        review_meta={review_meta} />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById('app'));