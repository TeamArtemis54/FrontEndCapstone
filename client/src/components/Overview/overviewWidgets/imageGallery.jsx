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

  scrollImageGallery(direction){
    var styleIndex = this.props.selectedStyle
    var stylePhotos=this.props.styles[styleIndex].photos
    if ((this.state.focusedImageIndex < stylePhotos.length-1) && direction == 'right'){
      this.setState({focusedImageIndex: Number(this.state.focusedImageIndex) + 1})

      if (this.state.focusedImageIndex > this.state.carouselIndex + 5){
        this.setState({carouselIndex: this.state.carouselIndex + 1})
      }
    }
    if ((this.state.focusedImageIndex > 0) && direction == 'left'){

      if (this.state.focusedImageIndex <= this.state.carouselIndex){
        this.setState({carouselIndex: this.state.focusedImageIndex - 1})
      }
      this.setState({focusedImageIndex: Number(this.state.focusedImageIndex) - 1})


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
      // console.log(styleIndex)
      // console.log(stylePhotos)
      // console.log(mainImage)
      // console.log(this.props.styles)
      // console.log(this.props.selectedStyle)
      // console.log(this.props.styles[this.props.selectedStyle].photos)
      console.log('carousel', this.state.carouselIndex)
      console.log('fII', this.state.focusedImageIndex)

      // if(this.props.styles[this.props.selectedStyle].photos[this.state.focusedImageIndex]){
        url = this.props.styles[this.props.selectedStyle].photos[this.state.focusedImageIndex].url
      // }

      // console.log(this.props.styles[this.props.selectedStyle].photos[this.state.focusedImageIndex])
      // console.log('fII', this.state.focusedImageIndex)


    } else {
      var stylePhotos = []
      var mainImage = {thumbnail_url:''}
    }
    return (
      <>

      <div id='main-image-container'>

      <button id='left-button'  onClick={()=>{this.scrollImageGallery('left')}}><i class="arrow left"></i></button>
      <button id='right-button' onClick={()=>{this.scrollImageGallery('right')}}><i class="arrow right"></i></button>

      <ul id='carousel'>
      <button id='down-button' onClick = {()=>{this.scrollThumbnails('down')}}><i class="arrow up"></i></button>
        {stylePhotos.map((image, index) => {
          if (index >= carouselStart && index <= carouselEnd){
            var idForFocus = 'nothing'

            if (index == this.state.focusedImageIndex){
              idForFocus = 'focused'
              console.log('contrast',index, this.state.focusedImageIndex)
              console.log('FOCUSED!')
              console.log(index)
            }
            // if (index === this.state.focusedImageIndex){

            //   return (
            //   <li  data-index={index} onClick={this.changeFocusedImage} key={image.thumbnail_url}>
            //   {/* {index} */}
            //   <img id='focused' data-index={index} onClick={this.changeFocusedImage}  src={image.thumbnail_url} ></img></li>
            //   )
            // } else {

              return (
                <li data-index={index} onClick={this.changeFocusedImage} key={image.thumbnail_url}>
                <img data-index={index} id={idForFocus} onClick={this.changeFocusedImage}  src={image.thumbnail_url} ></img></li>
                )


          }

        })}
      <button id='up-button' onClick = {()=>{this.scrollThumbnails('up')}}><i class="arrow down"></i></button>

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