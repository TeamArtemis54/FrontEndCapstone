import React, {Component} from 'react';
const getStyle = require('./httpHandler').getStyle

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
        console.log(this.state.carouselIndex)
        if(this.state.carouselIndex + 7 < stylePhotos.length){
          this.setState({carouselIndex: this.state.carouselIndex + 1})
          console.log(this.state.carouselIndex)
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
    //   alert(event.target.dataset.index)
       var index = event.target.dataset.index
       this.setState({focusedImageIndex: index})
       console.log(this.state.focusedImageIndex)
       console.log(index)
     }



  render(){

    //carousel
    const carouselStart = this.state.carouselIndex
const carouselEnd = carouselStart + 6


if(this.props.hasData){
  var styleIndex = this.props.selectedStyle
  var stylePhotos=this.props.styles[styleIndex].photos

var mainImage = stylePhotos[this.state.focusedImageIndex]
console.log(mainImage)
console.log('mainImage')

} else {
  var stylePhotos = []
  var mainImage = {thumbnail_url:''}
  console.log('sfsff')

}
console.log(stylePhotos)





    return (
<>
      <div>
      <img src={mainImage.thumbnail_url}></img>
    </div>

    <hr></hr>


      <button onClick = {()=>{this.scrollThumbnails('up')}}>Next</button>
      <button onClick = {()=>{this.scrollThumbnails('down')}}>Previous</button>


      <ul>
        {stylePhotos.map((image, index) => {

if (index >= carouselStart && index <= carouselEnd){
  return (
    <li data-index={index} onClick={this.changeFocusedImage} key={image.thumbnail_url}> {index}<img data-index={index} onClick={this.changeFocusedImage}  src={image.thumbnail_url} ></img></li>)
}


            // <li key={image.thumbnail_url}> {index}<img src={image.thumbnail_url} ></img></li>
          })



        }
      </ul>



      </>


  )
};
}
export default ImageGallery