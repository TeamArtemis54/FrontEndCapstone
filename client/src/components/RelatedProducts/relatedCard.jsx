import React from 'react';
import Stars from '../reusable_components/Stars.jsx';

const axios = require('axios');

class RelatedCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsMeta: {}
    }

    this.getReviewsMeta = this.getReviewsMeta.bind(this);
  }

  getReviewsMeta() {
    console.log('id', this.props.product.id);
    axios.get(`/api/reviews/meta/${this.props.product.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          reviewsMeta: response.data
        })
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getReviewsMeta();
  }

  render() {
    console.log('reviewsmeta', this.state.reviewsMeta);
    return (
      <div className="relatedCard" onClick={(e) => this.props.clickFn(this.props.product, e)}>
        <div className="card_img">
          {this.props.thumbnails[0] === null ?
          <div className="card_img__thumbnail">No image available</div> :
          // <img className="card-thumbnail" src={props.thumbnails}/>
          <div className="card_img__thumbnail" style={{
            backgroundImage: `url(${this.props.thumbnails})`
          }}>
            <p onClick={(e) => this.props.favorite(e)} className="card_img__star">&#9733;</p>
          </div>
          }
        </div>
        {/* maybe send message that says no image available */}
        <div className="card_info">
          <p className="card_info__category">{this.props.product.category}</p>
          <p className="card_info__name">{this.props.product.name}</p>
          <p className="card_info__price">${this.props.product.default_price}</p>
          <Stars review_meta = {this.state.reviewsMeta}/>
        </div>
      </div>
    )
  }
}

export default RelatedCard;