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



  return (
    // console.log('current in outfit', currentProduct),
    <div className="outfitList">
      {/* <AddItemCard /> */}
      <CardComponent type={"add"} productId={currentProduct.id}/>
      <CardComponent type={"outfit"} />
    </div>
  )
}

export default OutfitList;