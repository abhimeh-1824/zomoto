import React from "react";
import "./DeliveryCollectionItem.css";
const DeliveryCollectionItem = ({ item }) => {
  return (
    <div className="delivery-collection-item">
      <div className="delivery-collection-item-image-wrap">
        <img
          src={item.cover}
          alt={item.title}
          className="deliver-collection-item-image"
        />
      </div>
      <div className="deliver-collection-item-title">{item.title}</div>
    </div>
  );
};

export default DeliveryCollectionItem;
