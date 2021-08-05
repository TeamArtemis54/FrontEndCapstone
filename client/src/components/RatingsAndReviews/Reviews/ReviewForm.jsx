import React, {useState} from 'react';
import Input from './../../reusable_components/Input.jsx';

const ReviewForm = (props) => {
  const {product_id} = props;
  const [productId] = useState(product_id);
  const [rating, setRating] = useState(1);
  const [summary, setSummary] = useState('');

  function submitReview () {

  }

  return (
    <div className='review-form'>
      <form onSubmit={submitReview()}>
        <p>Please select a rating from 1 - 5</p>
        <div className='review-form__rating'>
          <div>
            <input type="radio" id="1" name="rating" value="1"></input>
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input type="radio" id="2" name="rating" value="2"></input>
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input type="radio" id="3" name="rating" value="3"></input>
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input type="radio" id="4" name="rating" value="4"></input>
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input type="radio" id="5" name="rating" value="5"></input>
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div className='review-form__summary'>
          <Input
            className='review-form__summary--input'
            type='textarea'
            placeholder='Add a summary of your review (in less than 50 characters'
            value={summary} />
        </div>

      </form>
    </div>
  )
};
export default ReviewForm;


//  summary	text	Summary text of the review,
//  body	text	Continued or full text of the review,
//  recommend	bool	Value indicating if the reviewer recommends the product,
//  name	text	Username for question asker,
//  email	text	Email address for question asker,
//  photos	[text]	Array of text urls that link to images to be shown,
//  characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...},
//}