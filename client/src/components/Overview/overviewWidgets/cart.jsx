// initializing this as .jsx vs .js will see what happens
//result: webpack did not find cart.jsx module. renamed to .s and worked

import React, {Component} from 'react';


class AddToCart extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(this.props.selectedSize == null){
      alert('AHHH!')
    } else{
      alert(`${this.props.style_id}  ${this.props.selectedSize} ${this.props.selectedQuantity}`)
    }
  }

  render(){
    var inStock = this.props.inStock
    return(
      <>
      <div id='add-to-cart-row'>
        {inStock ? <button id='add-to-cart-row--button' onClick={this.handleClick}>Add To Cart</button> : 'poop'}
        <div id='add-to-cart-row--star'> star </div>
      </div>
      </>
    )
  }
}

class Cart extends Component {
  constructor(props){
    super(props)
    this.selectSize = this.selectSize.bind(this)
    this.selectQuantity = this.selectQuantity.bind(this)

    this.state={
      selectedSize: null,
      quantityAvailable: null,
      selectedQuantity: null
  }

  }

  selectSize(event){
    let [size,quantity] = event.target.value.split(',')
    this.setState({
      selectedSize:size,
      quantityAvailable:quantity,
      selectedQuantity: 1})
  }

  selectQuantity(event){
    let selectedQuantity = event.target.value
    this.setState({selectedQuantity:selectedQuantity})
  }

  render(){

    if(!this.props.hasData){
      return <div>nothin!</div>
    }

    var quantitiesInStock =Object.entries(this.props.selectedStyleObject.skus).map((key) => {
      // console.log(key[1].quantity);
    })

    var inStock = quantitiesInStock.some((elem)=>elem!==0)
    // console.log(inStock)


    if(this.state.quantityAvailable){
      var list = [];
      for (var i = 1; i <= this.state.quantityAvailable; i++) {
        list.push(i);
      }
    } else {
      var list = []
    }

    // console.log(this.props.selectedStyleObject)

    return(
      <>
        {/* <div>somethin!</div> */}

        {/* <ul>
          {Object.entries(this.props.selectedStyleObject.skus).map((key) => {//console.log(key[1].quantity);

          if (key[1].quantity !== 0){
            return <li key={key}>{key[0]}    {key[1].size}   {key[1].quantity} </li>
          }
          })}
        </ul> */}

        <form id='shopping-form' onSubmit={this.handleSubmit}>
          <label>
            {/* size: */}
            <select id='select-size' value={this.state.value} onChange={this.selectSize}>
            <option value={null} >select size</option>

              {Object.entries(this.props.selectedStyleObject.skus).map((key) => {//console.log(key);
                if (key[1].quantity !== 0){
                  return <option key={key[0]} value={[key[1].size, key[1].quantity]} >{key[1].size}</option>
                }
              })}

            </select>
          </label>
          {/* /////////second select menu ////////////*/}
          <label>
            {/* quantity: */}
            <select id='select-quantity' value={this.state.selectedQuantity} onChange={this.selectQuantity}>
              {}
              <option value={null} >-</option>

              {list.map((qty) => {
                return <option value={qty} >{qty}</option>
                })}
            </select>
          </label>
          {/* //AHH SHIT. SHOULD ADD TO CART BE SUBMIT BUTTON? */}
          {/* <input type="submit" value="Submit" /> */}
        </form>

        <AddToCart inStock={inStock} style_id={this.props.selectedStyleObject.style_id} selectedSize={this.state.selectedSize} selectedQuantity={this.state.selectedQuantity}/>

      </>
    )
  }
}

export default Cart