import React from 'react';
import RelatedCard from '../relatedList/relatedCard.jsx';
// import AddItemCard from './addItemCard.jsx';
import CardComponent from '../CardComponent.jsx';

const UserList = (props) => {
  return (
    <div className="outfitList">
      {/* <AddItemCard /> */}
      <CardComponent type={"add"} />
      <CardComponent type={"outfit"} />
    </div>
  )
}

export default UserList;