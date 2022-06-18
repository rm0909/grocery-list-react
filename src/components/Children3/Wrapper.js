import React from "react";

import ItemsContainer from "./Children4/ItemsContainer.js";
export default function Wrapper({
  items,
  reRender,
  edit,
  inputName,
  inputQuantity,
}) {
  return (
    <div className="wrapper">
      {items.length > 0 &&
        items.map((item, i) => (
          <ItemsContainer
            key={i}
            itemName={item.itemName}
            quantity={item.quantity}
            id={item._id}
            reRender={reRender}
            edit={edit}
            inputName={inputName}
            inputQuantity={inputQuantity}
          />
        ))}
    </div>
  );
}
