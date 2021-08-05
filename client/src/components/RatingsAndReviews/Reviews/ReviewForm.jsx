import React, {useState} from 'react';
import Input from './../../reusable_components/Input.jsx';

const ReviewForm = (props) => {
  const {product_id} = props;
  const [productId] = useState(product_id);
  const [rating, setRating] = useState(1);
  const [body, setBody] = useState('');
  // SUMMARY WILL BE body.slice(0, 50)
  const [summary, setSummary] = useState(`${body.slice(0, 50)}...`);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function submitReview () {

  }

  return (
    <div className='review-form'>
      <form onSubmit={submitReview()}>
        <p>Please select a rating from 1 - 5</p>

        <div className='review-form__rating'>
          <div className='review-form__rating-value'>
            <input type="radio" id="1" name="rating" value="1"></input>
            <label htmlFor="1">1</label>
          </div>
          <div className='review-form__rating-value'>
            <input type="radio" id="2" name="rating" value="2"></input>
            <label htmlFor="2">2</label>
          </div>
          <div className='review-form__rating-value'>
            <input type="radio" id="3" name="rating" value="3"></input>
            <label htmlFor="3">3</label>
          </div>
          <div className='review-form__rating-value'>
            <input type="radio" id="4" name="rating" value="4"></input>
            <label htmlFor="4">4</label>
          </div>
          <div className='review-form__rating-value'>
            <input type="radio" id="5" name="rating" value="5"></input>
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div className='review-form__body'>
          <Input
            label="Review text"
            className='review-form__body--input'
            onChange={(evt) => setBody(evt.target.value)}
            type='textarea'
            placeholder='Write a review of the product in less than 250 characters'
            value={body} />
        </div>

        <div className='review-form__recommend'>
          <div className='review-form__recommend--yes'>
            <input type="radio" id="yes" name="recommend" value="true"></input>
            <label htmlFor="yes">Yes</label>
          </div>
          <div className='review-form__recommend--yes'>
            <input type="radio" id="no" name="recommend" value="false"></input>
            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className='review-form__name'>
          <Input
            label="Your name"
            className='review-form__name--input'
            onChange={(evt) => setName(evt.target.value)}
            type='textarea'
            placeholder='Your name here'
            value={name} />
        </div>

        <div className='review-form__email'>
          <Input
            label="Email"
            className='review-form__email--input'
            onChange={(evt) => setEmail(evt.target.value)}
            type='text'
            placeholder='Your email here'
            value={email} />
        </div>

      </form>
    </div>
  )
};
export default ReviewForm;


//  photos	[text]	Array of text urls that link to images to be shown,
//  characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...},
//}