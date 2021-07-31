import React, {Component} from 'react';
const getStyle = require('./httpHandler.jsx').getStyle

class StyleSelector extends Component {
  constructor(props){
    super(props)

    }


  componentDidMount(){

  }

  render(){
    return(
      <div id='style-container'>
        {this.props.styles.map((style,index) =>
          <div key={style.style_id} className='style-preview-thumbnail' onClick={()=>{this.props.changeStyle(index)}}> <img src={style.photos[0].thumbnail_url} ></img></div>
        )}
      </div>
          )
  }
}

export default StyleSelector