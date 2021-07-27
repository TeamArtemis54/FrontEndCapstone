import React, {Component} from 'react';
const getStyle = require('./httpHandler').getStyle

class StyleSelector extends Component {
  constructor(props){
    super(props)

    }


  componentDidMount(){

  }

  render(){
    return(
      <ul>
        {this.props.styles.map((style,index) =>
          <li onClick={()=>{this.props.changeStyle(index)}}> <img src={style.photos[0].thumbnail_url} ></img></li>
        )}
      </ul>
          )
  }
}

export default StyleSelector