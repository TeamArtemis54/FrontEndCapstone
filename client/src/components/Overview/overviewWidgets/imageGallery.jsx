import React, {Component} from 'react';
// import addZoom from './zoom.js'
// import addZoom2 from './zoom2.js'

const getStyle = require('./httpHandler.jsx').getStyle

var url

class ImageGallery extends Component {
  constructor (props) {
    super(props);
    this.changeFocusedImage = this.changeFocusedImage.bind(this)

    this.state = {
      focusedImageIndex: 0,
      carouselIndex: 0,
    };
  }

  scrollThumbnails(direction){

    var styleIndex = this.props.selectedStyle
    var stylePhotos=this.props.styles[styleIndex].photos

    if(stylePhotos.length >7){

      //ALSO MAKES THE NEXT AND PREVIOUS BUTTONS DISAPPEAR (IF THERE ARE 7 OR FEWER THUMBNAILS)

      if(direction === 'up'){
        // console.log(this.state.carouselIndex)
        if(this.state.carouselIndex + 7 < stylePhotos.length){
          this.setState({carouselIndex: this.state.carouselIndex + 1})
          // console.log(this.state.carouselIndex)
        }
      }

      if(direction === 'down'){
        if(this.state.carouselIndex > 0){
          this.setState({carouselIndex: this.state.carouselIndex - 1})
        }
      }
    }
  }

  changeFocusedImage(event){
       var index = event.target.dataset.index
       this.setState({focusedImageIndex: index})
  }

  overlay(){
    document.getElementById("overlay").style.display = "flex";
    // document.getElementById("zoom-img").style.display = "block";

  }

  zoom(){
    addZoom();
  }

  zoomNew(){
    addZoom2()
  }

  componentDidMount(){
  }


  render(){

    //carousel
    const carouselStart = this.state.carouselIndex
    const carouselEnd = carouselStart + 6

    if(this.props.hasData){
      var styleIndex = this.props.selectedStyle
      var stylePhotos=this.props.styles[styleIndex].photos

      var mainImage = stylePhotos[this.state.focusedImageIndex]
      // console.log(mainImage)
      // console.log('mainImage')

      url = this.props.styles[this.props.selectedStyle].photos[this.state.focusedImageIndex].url

// console.log(url)
    } else {
      var stylePhotos = []
      var mainImage = {thumbnail_url:''}
      // console.log('sfsff')
    }



    return (
      <>
      <div id='main-image-container'>
      {/* <div id='dumbthing'></div> */}


      <ul id='carousel'>
        {stylePhotos.map((image, index) => {
          if (index >= carouselStart && index <= carouselEnd){return (
            <li data-index={index} onClick={this.changeFocusedImage} key={image.thumbnail_url}>
            {/* {index} */}
            <img data-index={index} onClick={this.changeFocusedImage}  src={image.thumbnail_url} ></img></li>
            )
          }

        })}
      </ul>




        <img id='main-image' onClick={this.overlay.bind(this)} src={mainImage.thumbnail_url}></img>
      </div>

      <div id="overlay">
      <div id="zoom-img" onClick={this.zoom.bind(this)} style={{    backgroundImage: `url(${url})`}}>
        {/* <img src={mainImage.thumbnail_url}></img> */}
      </div>
      </div>


      {/* <div id="zoom-img" onClick={this.zoom.bind(this)} style={{    backgroundImage: `url(${url})`}}>
      </div> */}

      <hr></hr>

      <button onClick = {()=>{this.scrollThumbnails('up')}}>Next</button>
      <button onClick = {()=>{this.scrollThumbnails('down')}}>Previous</button>



      </>


  )
};
}



export {ImageGallery, url}