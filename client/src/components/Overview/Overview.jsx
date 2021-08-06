import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {ImageGallery} from './overviewWidgets/imageGallery.jsx'
import StyleSelector from './overviewWidgets/styleSelector.jsx'
import Cart from './overviewWidgets/cart.jsx'
import ProductInfo from './overviewWidgets/productInfo.jsx'

const fetcher = require('./overviewWidgets/httpHandler.jsx')


class Overview extends Component {
  constructor(props){
    super(props)
    this.changeStyle = this.changeStyle.bind(this)
    this.state = {
      dataDidLoad:false,
      styles:[],
      selectedStyle: 0,

      productCategory: '',
      productName: ''
    }
  }

  changeStyle(newStyle){
    this.setState({selectedStyle: newStyle})
  }

  componentDidMount(){
    fetcher.getStyle('17071', (err, data)=>{
      if(err){
        console.log(err)
      }

      this.setState({styles: data.results, dataDidLoad: true})
    })


    fetcher.getProduct('17071', (err, data)=>{
      if(err){
        console.log(err)
      }

      this.setState({productCategory:data.category, productName:data.name})

    })


  }


  render(){
    if(this.state.dataDidLoad){

      var styleName = this.state.styles[this.state.selectedStyle]['name']

      var price = this.state.styles[this.state.selectedStyle]['original_price']
      if (this.state.styles[this.state.selectedStyle]['sale_price']){
        var salePrice = this.state.styles[this.state.selectedStyle]['sale_price']
      } else {
        salePrice = null
      }

    } else {
      var price = null
    }

    return (
    <>

    <div id="main">
      <article>

      <ImageGallery selectedStyle={this.state.selectedStyle}  hasData={this.state.dataDidLoad} styles={this.state.styles}/>

      </article>
      <aside>

      <ProductInfo salePrice={salePrice} selectedStylePrice={price} productCategory ={this.state.productCategory} productName={this.state.productName} styleName={styleName}/>

      <StyleSelector changeStyle={this.changeStyle} selectedStyle={this.state.selectedStyle} hasData={this.state.dataDidLoad} styles={this.state.styles}/>

      <Cart hasData={this.state.dataDidLoad} selectedStyleObject={this.state.styles[this.state.selectedStyle]}/>


      </aside>
    </div>
    {/* <footer>related products</footer> */}

    </>
    )
  }
};

export default Overview;