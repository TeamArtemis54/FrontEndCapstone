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