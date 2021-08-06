import React, { useState } from 'react';
import Input from './../../reusable_components/Input.jsx';
import Button from './../../reusable_components/Button.jsx';

const ReviewForm = (props) => {
  const { product_id } = props;
  const [productId] = useState(product_id);
  const [rating, setRating] = useState(5);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [recommend, setRecommend] = useState(true);

  function handleFormSubmission() {
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(productId, rating, body, name, email, photos, recommend)
    // axios.post('/api/reviews',{

    // })
  }

  return (
    <div className='review-form'>
      <form className='review-form__form' onSubmit={handleFormSubmission()} encType='multipart/form-data'>
        <p>Please select a rating from 1 - 5</p>

        <div className='review-form__rating'>
          <div className='review-form__rating-value'>
            <input onClick={() => setRating(1)} type='radio' id='1' name='rating' value='1'></input>
            <label htmlFor='1'>1</label>
          </div>
          <div className='review-form__rating-value'>
            <input onClick={() => setRating(2)} type='radio' id='2' name='rating' value='2'></input>
            <label htmlFor='2'>2</label>
          </div>
          <div className='review-form__rating-value'>
            <input onClick={() => setRating(3)} type='radio' id='3' name='rating' value='3'></input>
            <label htmlFor='3'>3</label>
          </div>
          <div className='review-form__rating-value'>
            <input onClick={() => setRating(4)} type='radio' id='4' name='rating' value='4'></input>
            <label htmlFor='4'>4</label>
          </div>
          <div className='review-form__rating-value'>
            <input onClick={() => setRating(5)} type='radio' id='5' name='rating' value='5'></input>
            <label htmlFor='5'>5</label>
          </div>
        </div>

        <div className='review-form__body'>
          <Input
            label='Review text'
            className='review-form__body--input'
            onChange={(evt) => setBody(evt.target.value)}
            type='textarea'
            placeholder='Write about what you did or did not like about this product in less than 300 characters'
            value={body} />
        </div>

        <h4 className=''>Would you recommend this product?</h4>
        <div className='review-form__recommend'>
          <div className='review-form__recommend--yes'>
            <Input
              label='Yes'
              htmlFor='yes'
              id='yes'
              name='recommend'
              value={true}
              className='review-form__yes--radio'
              onChange={() => setRecommend(true)}
              type='radio' />
          </div>
          <div className='review-form__recommend--no'>
            <Input
              label='No'
              htmlFor='no'
              id='no'
              name='recommend'
              value={false}
              className='review-form__no--radio'
              onChange={() => setRecommend(false)}
              type='radio' />
          </div>
        </div>

        <div className='review-form__name'>
          <Input
            label='Your name'
            className='review-form__name--input'
            onChange={(evt) => setName(evt.target.value)}
            type='textarea'
            rows='9'
            cols='40'
            placeholder='Douglas Adams'
            value={name} />
        </div>

        <div className='review-form__email'>
          <Input
            className='review-form__email--input'
            label='Email'
            onChange={(evt) => setEmail(evt.target.value)}
            placeholder='Example: vogonsandmice@gmail.com'
            type='text'
            value={email} />
        </div>

        <div className='review-form__photos'>
          <Input
            accept='.png, .jpg, .jpeg'
            className='review-form__photos--input'
            htmlFor='file'
            id='file'
            label='Upload photos here'
            multiple
            name='file'
            type='file' />
        </div>

        <Button
          className='review-form__button-submit'
          type='button'
          onClick={() => handleFormSubmission()}>Submit Review</Button>

          {props.children}

      </form>
    </div>
  )
};
export default ReviewForm;


//  characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { '14': 5, '15': 5 //...},
//}