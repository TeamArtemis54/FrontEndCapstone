import React, { useState, useEffect } from 'react';
import RelatedCard from '../relatedList/relatedCard.jsx';
// import AddItemCard from './addItemCard.jsx';
import CardComponent from '../CardComponent.jsx';

const axios = require('axios');


// Outfitlist needs access to the current product being displayed on overview
// because upon clicking it needs to be able to add that item to the list

const OutfitList = (props) => {

  // the currentProduct being sent down from main 'overview'
  const { currentProduct } = props;

  const [outfitList, setOutfitList] = useState([]);

  const [outfitInfo, setOutfitInfo] = useState([]);

  const [outfitThumbnail, setOutfitThumbnail] = useState([]);

  function addItem() {
    let listItem =  [...outfitList];
    if (outfitList.indexOf(currentProduct) < 0) {
      listItem = [...listItem, currentProduct];
      setOutfitList(listItem);
    } else {
      console.log('Item has already been added!');
    }
    // setOutfitList(outfitList => [...outfitList, currentProduct]);
    // console.log('outfitlist', outfitList);
    // return <h1>hello</h1>
  }

  useEffect(() => {
    console.log('this should get hit after changing outfitList no?');
    if (outfitList.length > 0) {
      outfitList.map((item) => {
        getOutfitInfo(item.id);
        getOutfitThumbnail(item.id);
      })
    } else {
      console.log('outfit list is empty');
    }
  }, [outfitList])

  function getOutfitInfo(id) {
    axios.get(`/api/products/${id}`)
      .then((response) => {
        let data = response.data;
        setOutfitInfo(outfitInfo => [...outfitInfo, data]);
      })
      .catch((err) => console.log(err));
  }

  function getOutfitThumbnail(id) {
    axios.get(`/api/products/${id}/styles`)
      .then((response) => {
        let thumbnail = response.data.results[0].photos[0].thumbnail_url;
        setOutfitThumbnail(outfitThumbnail => [...outfitThumbnail, thumbnail]);
      })
      .catch((err) => console.log(err));
  }

  function removeOutfitItem(id) {
    console.log('here');
    console.log('outfitList before', outfitList);
    if (outfitList.length > 0) {
      // for (let i = 0; i < outfitList.length; i++) {
      //   if (outfitList[i].id === id) {
      //     outfitList.splice(i, 1);
      //   }
      // }
      outfitList.pop();
    }
    console.log('outfitlist after', outfitList);
  }

  return (
    // console.log('current in outfit', currentProduct),
    <div className="outfitList">
      {/* <AddItemCard /> */}
      <CardComponent type={"add"} productId={currentProduct.id} addFn={addItem}/>
      {outfitInfo.length > 0 && outfitThumbnail.length > 0 ?
        outfitInfo.map((item, i) => {
          return <CardComponent key={i} type={"outfit"} outfitProduct={item} outfitThumbnail={outfitThumbnail[i]} deleteItemFn={removeOutfitItem}/>
        }) :
        console.log('not yet ready')
      }
    </div>
  )
}

export default OutfitList;