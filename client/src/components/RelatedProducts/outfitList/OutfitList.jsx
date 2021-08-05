import React, { useState, useEffect } from 'react';
import RelatedCard from '../relatedList/relatedCard.jsx';
// import AddItemCard from './addItemCard.jsx';
import CardComponent from '../CardComponent.jsx';


// Outfitlist needs access to the current product being displayed on overview
// because upon clicking it needs to be able to add that item to the list

const OutfitList = (props) => {

  // the currentProduct being sent down from main 'overview'
  const { currentProduct } = props;

  const [outfitList, setOutfitList] = useState([]);

  function addItem() {
    // console.log(currentProduct);
    setOutfitList(outfitList => [...outfitList, currentProduct]);
    // console.log('outfitlist', outfitList);
  }

  return (
    // console.log('current in outfit', currentProduct),
    <div className="outfitList">
      {/* <AddItemCard /> */}
      <CardComponent type={"add"} productId={currentProduct.id} addFn={addItem}/>
      {outfitList.length > 0 ?
        outfitList.map((item, i) => {
          <CardComponent type={"outfit"} productId={item.id} />
        }) :
        console.log('not yet ready')
      }
    </div>
  )
}

export default OutfitList;