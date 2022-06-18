import React, {useState} from "react";
import axios from "axios";
const ItemsContainer = ({ itemName, quantity, id, reRender, edit }) => {
  const [showItemButtons,setShowItemButtons] = useState(false)
  const deleteItem = async () => {
    try {
      await axios.delete(`https://grocery-list-restapi.herokuapp.com/item/${id}`);
      console.log("item deletado");
    } catch (e) {
      console.log("erro ao deletar item");
    }
  };
  const toggleButtons = () => setShowItemButtons(prev=> prev ? false : true)
  return (
    <div onClick={toggleButtons} className="item">
      <p className="name">
        {quantity}x {itemName}
      </p>
    {showItemButtons && <div className="item-buttons-container">
      <button className="buttons"
        onClick={() => {
          deleteItem();
          reRender();
        }}
      >
        excluir
      </button>
      
      <button className="buttons"
        onClick={() => edit(id)}
      >
        editar
      </button>
      </div>}
    </div>
  );
};
export default ItemsContainer;
