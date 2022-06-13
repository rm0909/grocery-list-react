import React, { useState } from "react";
import axios from "axios";
export default function AddForm() {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    id === "text" && setText(value);
    id === "quantity" && setQuantity(value);
  };
  const post = () => {
    const userID = localStorage.getItem("userID");
    axios
      .post("http://localhost:8000/post/", {
        _id: userID,
        text: text,
        quantity: quantity,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input
        type="text"
        id="text"
        placeholder="nome"
        onChange={handleChange}
      ></input>
      <input
        type="number"
        id="quantity"
        placeholder="quantidade"
        onChange={handleChange}
      ></input>
      <button onClick={post}>Postar</button>
    </>
  );
}
