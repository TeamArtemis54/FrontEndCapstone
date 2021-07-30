import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header/Header.jsx';
// OVERVIEW

// RELATED PRODUCTS
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
// RATINGS AND REVIEWS
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';

const App = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [review_meta, setReviewMeta] = useState({});

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProduct(response.data[1]);
        axios.get(`/api/reviews/${response.data[1].id}`)
          .then((response) => {
            setReviews(response.data.results);
          });
        axios.get(`/api/reviews/meta/${response.data[1].id}`)
          .then((response) => {
            setReviewMeta(response.data);
          });
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Team Artemis</h1>

      {/* PLACEHOLDER FOR OVERVIEW COMPONENT */}

      <RelatedProducts />

      <RatingsAndReviews
        reviews={reviews}
        review_meta={review_meta} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));