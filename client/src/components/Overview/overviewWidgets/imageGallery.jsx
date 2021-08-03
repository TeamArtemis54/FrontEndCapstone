import React, {Component} from 'react';
import addZoom from './zoom.js'
// import addZoom2 from './zoom2.js'

const getStyle = require('./httpHandler.jsx').getStyle

var url

class ImageGallery extends Component {
  constructor (props) {
    super(props);
    this.changeFocusedImage = this.changeFocusedImage.bind(this)
    this.scrollImageGallery = this.scrollImageGallery.bind(this)

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

  scrollImageGallery(){
    var styleIndex = this.props.selectedStyle
    var stylePhotos=this.props.styles[styleIndex].photos
    if (this.state.focusedImageIndex < stylePhotos . length-1){
      this.setState({focusedImageIndex: this.state.focusedImageIndex + 1})
    }

  }

  componentDidUpdate(){
    // console.log('tsxtsxv')
    // console.log(document.querySelectorAll(`[data-index~="5"]`))
    // console.log(document.querySelectorAll(`[data-index~="${this.state.focusedImageIndex}"]`))

    // if (document.getElementById("focused")){
    //   document.getElementById("focused").id = ""
    // }

    // document.querySelectorAll(`[data-index~="${this.state.focusedImageIndex}"]`)[1].id = 'focused'
  }

  changeFocusedImage(event){

    // if (document.getElementById("focused")){
    //   document.getElementById("focused").id = ""
    // }
    // event.target.id = 'focused'

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
    // document.querySelectorAll(`[data-index~="0"]`)[1].id = 'focused'
    //console.log(this.props.selectedStyle)
  }


  render(){

    //carousel
    const carouselStart = this.state.carouselIndex
    const carouselEnd = carouselStart + 6

    if(this.props.hasData){
      var styleIndex = this.props.selectedStyle
      var stylePhotos=this.props.styles[styleIndex].photos
      var mainImage = stylePhotos[this.state.focusedImageIndex]
      url = this.props.styles[this.props.selectedStyle].photos[this.state.focusedImageIndex].url
    } else {
      var stylePhotos = []
      var mainImage = {thumbnail_url:''}
    }
    return (
      <>
      <button onClick={this.scrollImageGallery}></button>
      <div id='main-image-container'>
      <ul id='carousel'>
      <button onClick = {()=>{this.scrollThumbnails('down')}}>Previous</button>
        {stylePhotos.map((image, index) => {
          if (index >= carouselStart && index <= carouselEnd){

            // if (index === this.state.focusedImageIndex){

            //   return (
            //   <li  data-index={index} onClick={this.changeFocusedImage} key={image.thumbnail_url}>
            //   {/* {index} */}
            //   <img id='focused' data-index={index} onClick={this.changeFocusedImage}  src={image.thumbnail_url} ></img></li>
            //   )
            // } else {

              return (
                <li data-index={index} onClick={this.changeFocusedImage} key={image.thumbnail_url}>
                <img data-index={index} onClick={this.changeFocusedImage}  src={image.thumbnail_url} ></img></li>
                )


          }

        })}
      <button onClick = {()=>{this.scrollThumbnails('up')}}>Next</button>

      </ul>

        <img id='main-image' onClick={this.overlay.bind(this)} src={mainImage.url}></img>
      </div>

      <div id="overlay">
      <div id="zoom-img" onClick={this.zoom.bind(this)} style={{    backgroundImage: `url(${url})`}}>
      </div>
      </div>




      </>


  )
};
}



export {ImageGallery, url}