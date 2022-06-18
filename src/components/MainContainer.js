import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Wrapper from "./Children3/Wrapper";

export default function AddForm() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [postButton, setPostButton] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [itemID, setItemID] = useState("");
  const [items, setItems] = useState([]);
  const [reRender, setRerender] = useState([]);
  const inputEl = useRef();
  // useEffect rerendering only when i change items in the list without infinity loop
  useEffect(() => {
    const getItemsByAuthor = async () => {
      const { userID } = JSON.parse(localStorage.getItem("getData"));
      const res = await axios.get(`https://grocery-list-restapi.herokuapp.com/author/${userID}`);
      const { posts } = res.data;
      setItems(posts);
    };
    getItemsByAuthor();
  }, [reRender]);

  const componentRerender = () => setRerender(items);

  const handleChange = (e) => {
    const { id, value } = e.target;
    id === "itemName" && setItemName(value);
    id === "quantity" && setQuantity(value);
  };
  const postItems = async (itemName, quantity) => {
    const storedData = JSON.parse(localStorage.getItem("getData"));
    try {
      // user id to asign this item to the user in the database
      await axios.post("https://grocery-list-restapi.herokuapp.com/post/", {
        _id: storedData.userID,
        itemName: itemName,
        quantity: quantity,
      });
      console.log("item postado");
      componentRerender();
    } catch (err) {
      console.log("houve um erro ao postar", err);
    }
  };

  const edit = (givenItemID) => {
    setItemID(givenItemID);
    setPostButton(false);
    setShowForm(true)
    setInterval(()=>inputEl.current.focus(),500)
  };
  const handleForm = () => {
    setPostButton(true);
    setShowForm(prev=> prev ? false : true)
  };

  const editItems = async () => {
    try {
      await axios.patch(`https://grocery-list-restapi.herokuapp.com/item/${itemID}`, {
        itemName: itemName,
        quantity: quantity,
      });
      setRerender(items);
      console.log("item editado");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="formContainer">
        {" "}
        <button className="addItem" onClick={() => handleForm()}>
          Adicionar
        </button>
      {showForm && <form className="input-container">
          <input
            ref={inputEl}
            type="text"
            id="itemName"
            placeholder="nome"
            onChange={handleChange}
          ></input>

          <input
            type="number"
            id="quantity"
            placeholder="quantidade"
            onChange={handleChange}
          ></input>

          {postButton ? (
            <button onClick={() => postItems(itemName, quantity)}>
              Postar
            </button>
          ) : (
            <button onClick={() => editItems()}>Editar</button>
          )}
        </form>}
      </div>

      <Wrapper
        items={items}
        reRender={componentRerender}
        edit={edit}
        inputName={itemName}
        inputQuantity={quantity}
      />
    </>
  );
}
