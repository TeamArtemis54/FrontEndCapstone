import React, {Component} from 'react';
const getStyle = require('./httpHandler.jsx').getStyle

class StyleSelector extends Component {
  constructor(props){
    super(props)

    }


  componentDidMount(){

  }

  render(){

    const styles = this.props.styles.map((style,index) =>
      <div key={style.style_id} className='style-preview-thumbnail' className='flex-item' onClick={()=>{this.props.changeStyle(index)}}>
        <img src={style.photos[0].thumbnail_url} ></img>
        <span class="checkmark">
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>
      </div>
    )

    let numOfRows = Math.ceil(this.props.styles.length / 4)

    const all_rows = []

    for(let i =0; i<numOfRows; i++){
      const new_row = []
      for(let i =0; i<4; i++){
        if (styles[0]){
          new_row.push(styles.pop())
        } else{
          new_row.push(
            <div style={{visibility:'hidden'}}  className='flex-item' > <img src={null} ></img></div>
          )
        }
      }
      all_rows.push(new_row)
    }

    console.log(all_rows)



    const rows = all_rows.map(item=>{
     return (<div class="flex-container">
        {item}
      </div>
     )
    })

    console.log(rows)

  //   var rows = []

  //   for(let i=0;i<numOfRows;i++){
  //     rows.push(
  //     <div class="flex-container">
  //  <div class="flex-item ">
  //    <img src='https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'></img>
  //   </div>
  //   <div class="flex-item ">
  //    <img src='https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'></img>
  //   </div>
  //   <div class="flex-item ">
  //    <img src='https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'></img>
  //   </div>
  //   <div class="flex-item ">
  //    <img  src='https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'></img>
  //   </div>
  // </div>)
  //   }


    return(
      // <div id='style-container'>

      //   {this.props.styles.map((style,index) =>
      //     <div key={style.style_id} className='style-preview-thumbnail' onClick={()=>{this.props.changeStyle(index)}}> <img src={style.photos[0].thumbnail_url} ></img></div>
      //   )}
      // </div>

      rows
          )
  }
}

export default StyleSelector