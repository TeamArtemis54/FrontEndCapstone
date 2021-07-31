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

      //new for productInfo
      productCategory: '',
      productName: ''
    }
  }

  changeStyle(newStyle){
    this.setState({selectedStyle: newStyle})
  }

  componentDidMount(){
    fetcher.getStyle('17069', (err, data)=>{
      if(err){
        console.log(err)
      }
      // console.log('STYLE DATA')
      // console.log(data)
      this.setState({styles: data.results, dataDidLoad: true})
    })


    fetcher.getProduct('17071', (err, data)=>{
      if(err){
        console.log(err)
      }
      // console.log('PRODUCT DATA')
      // console.log(data)
      // console.log(data.category, data.name)
      this.setState({productCategory:data.category, productName:data.name})


      //this.setState({styles: data.results, dataDidLoad: true})
    })


  }

  // selectedStylePrice(price){
  //   //alert(price)
  //   return price
  // }

  render(){
    if(this.state.dataDidLoad){
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

    <header>Header</header>
    <div id="main">
      <article>

      <ImageGallery selectedStyle={this.state.selectedStyle}  hasData={this.state.dataDidLoad} styles={this.state.styles}/>

      </article>
      <aside>

      <ProductInfo salePrice={salePrice} selectedStylePrice={price} productCategory ={this.state.productCategory} productName={this.state.productName}/>

      <StyleSelector changeStyle={this.changeStyle} selectedStyle={this.state.selectedStyle} hasData={this.state.dataDidLoad} styles={this.state.styles}/>

      <Cart hasData={this.state.dataDidLoad} selectedStyleObject={this.state.styles[this.state.selectedStyle]}/>


      </aside>
    </div>
    <footer>related products</footer>

    </>
    )
  }
};
//ReactDom.render(<Overview />, document.getElementById('overview'));

// 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/'

//   'Authorization': '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'

export default Overview;